import { eq, desc, and } from "drizzle-orm"
import { db } from "../database"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { Product } from "@/core/domain/entities/product"
import { SaleTable } from "@/core/domain/entities/sale-table"
import { ProductNCM } from "@/core/domain/value-objects/product-ncm"
import {
  declarationInvoiceProducts,
  declarationInvoices,
  declarations,
  ncms,
  products,
  saleTables,
} from "../database/schemas"

type SaleTableWithProduct = SaleTable.WithProduct<Product>

export class SaleTableDatabaseRepository {
  private format(v: number | null, divider = 100) {
    // @ts-ignore
    return FormatFloatNumberHelper.format(v, divider)
  }

  async list(): Promise<SaleTableWithProduct[]> {
    try {
      const rows = await db
        .select({
          saleTable: saleTables,
          product: products,
          ncm: ncms,
        })
        .from(saleTables)
        .innerJoin(products, eq(saleTables.productId, products.id))
        .innerJoin(ncms, eq(products.ncmId, ncms.id))
        .orderBy(desc(saleTables.createdAt))

      return rows.map((row) => {
        const saleTable = SaleTable.instance({
          id: row.saleTable.id,
          productId: row.saleTable.productId,
          lastImportationAt: row.saleTable.lastImportationAt,
          lastImportationQuote: row.saleTable.lastImportationQuote
            ? this.format(row.saleTable.lastImportationQuote, 10000)
            : null,
          dollarQuote: this.format(row.saleTable.dollarQuote, 10000),
          dollarQuoteDate: row.saleTable.dollarQuoteDate,
          costPriceUsd: this.format(row.saleTable.costPriceUsd, 100),
          costPriceBrl: this.format(row.saleTable.costPriceBrl, 100),
          createdAt: row.saleTable.createdAt,
          updatedAt: row.saleTable.updatedAt,
        })

        const product = Product.instance({
          id: row.product.id,
          tid: row.product.tid,
          name: row.product.name,
          description: row.product.description,
          weight: this.format(row.product.weight),
          length: this.format(row.product.length),
          height: this.format(row.product.height),
          width: this.format(row.product.width),
          ncm: ProductNCM.create({
            id: row.ncm.id,
            code: row.ncm.code,
            cofins: this.format(row.ncm.cofins),
            icms: this.format(row.ncm.icms),
            ipi: this.format(row.ncm.ipi),
            pis: this.format(row.ncm.pis),
            tax: this.format(row.ncm.tax),
          }),
        })

        return { ...saleTable, product }
      })
    } catch (err) {
      console.error("❌ Error listing SaleTables:", err)
      throw new Error("Failed to list SaleTables")
    }
  }

  async upsert(saleTable: SaleTable): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .insert(saleTables)
          .values({
            id: saleTable.id,
            productId: saleTable.productId,
            lastImportationAt: saleTable.lastImportationAt,
            lastImportationQuote: saleTable.lastImportationQuote
              ? FormatFloatNumberHelper.toPersist(saleTable.lastImportationQuote, 10000)
              : null,
            dollarQuote: FormatFloatNumberHelper.toPersist(saleTable.dollarQuote, 10000),
            dollarQuoteDate: saleTable.dollarQuoteDate,
            costPriceUsd: FormatFloatNumberHelper.toPersist(saleTable.costPriceUsd, 100),
            costPriceBrl: FormatFloatNumberHelper.toPersist(saleTable.costPriceBrl, 100),
            createdAt: saleTable.createdAt,
            updatedAt: saleTable.updatedAt,
          })
          .onConflictDoUpdate({
            target: saleTables.id,
            set: {
              productId: saleTable.productId,
              lastImportationAt: saleTable.lastImportationAt,
              lastImportationQuote: saleTable.lastImportationQuote
                ? FormatFloatNumberHelper.toPersist(saleTable.lastImportationQuote, 10000)
                : null,
              dollarQuote: FormatFloatNumberHelper.toPersist(saleTable.dollarQuote, 10000),
              dollarQuoteDate: saleTable.dollarQuoteDate,
              costPriceUsd: FormatFloatNumberHelper.toPersist(saleTable.costPriceUsd, 100),
              costPriceBrl: FormatFloatNumberHelper.toPersist(saleTable.costPriceBrl, 100),
              updatedAt: new Date(),
            },
          })
      })
    } catch (err) {
      console.error("❌ Error upserting SaleTable:", err)
      throw new Error("Failed to upsert SaleTable")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.delete(saleTables).where(eq(saleTables.id, id))
      })
    } catch (err) {
      console.error("❌ Error deleting SaleTable:", err)
      throw new Error("Failed to delete SaleTable")
    }
  }

  async findLastImportation(
    productId: string,
    status?: "encerrada" | "em andamento"
  ): Promise<{ createdAt: Date; quote: number } | null> {
    try {
      const statusMap: Record<"encerrada" | "em andamento", "closed" | "open"> = {
        encerrada: "closed",
        "em andamento": "open",
      }

      const rows = await db
        .select({
          createdAt: declarations.createdAt,
          quote: declarations.quote,
        })
        .from(declarations)
        .innerJoin(
          declarationInvoices,
          eq(declarationInvoices.declarationId, declarations.id)
        )
        .innerJoin(
          declarationInvoiceProducts,
          eq(declarationInvoiceProducts.invoiceId, declarationInvoices.id)
        )
        .where(
          and(
            eq(declarationInvoiceProducts.productId, productId),
            status ? eq(declarations.status, statusMap[status]) : undefined
          )
        )
        .orderBy(desc(declarations.createdAt))
        .limit(1)

      const row = rows[0]
      if (!row) return null

      return {
        createdAt: row.createdAt,
        quote: this.format(row.quote, 10000),
      }
    } catch (err) {
      console.error("❌ Error finding last importation:", err)
      throw new Error("Failed to find last importation")
    }
  }

  static instance() {
    return new SaleTableDatabaseRepository()
  }
}

export const saleTableRepository = new SaleTableDatabaseRepository()
