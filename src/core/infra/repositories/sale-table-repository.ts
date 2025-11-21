import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Product } from "@/core/domain/entities/product";
import { SaleTable } from "@/core/domain/entities/sale-table";
import { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { desc, eq } from "drizzle-orm";
import { createDatabaseConnection } from "../database";
import {
  declarationInvoiceProducts,
  declarationInvoices,
  declarations,
  ncms,
  products,
  saleTables,
} from "../database/schemas";

type SaleTableWithProduct = SaleTable.WithProduct<Product>;

interface SaleTableRepository {
  list(): Promise<SaleTableWithProduct[]>;
  upsert(saleTable: SaleTable): Promise<void>;
  remove(id: string): Promise<void>;
  findLastImportation(productId: string): Promise<
    | {
        createdAt: Date;
        quote: number;
      }
    | null
  >;
}

export class SaleTableDatabaseRepository implements SaleTableRepository {
  async list(): Promise<SaleTableWithProduct[]> {
    const db = createDatabaseConnection();
    const rows = await db
      .select({
        saleTable: saleTables,
        product: products,
        ncm: ncms,
      })
      .from(saleTables)
      .innerJoin(products, eq(saleTables.productId, products.id))
      .innerJoin(ncms, eq(products.ncmId, ncms.id))
      .orderBy(desc(saleTables.createdAt));

    return rows.map((row) => {
      const saleTable = SaleTable.instance({
        id: row.saleTable.id,
        productId: row.saleTable.productId,
        lastImportationAt: row.saleTable.lastImportationAt,
        lastImportationQuote: row.saleTable.lastImportationQuote
          ? FormatFloatNumberHelper.format(row.saleTable.lastImportationQuote, 10000)
          : null,
        dollarQuote: FormatFloatNumberHelper.format(row.saleTable.dollarQuote, 10000),
        dollarQuoteDate: row.saleTable.dollarQuoteDate,
        costPriceUsd: FormatFloatNumberHelper.format(row.saleTable.costPriceUsd, 100),
        costPriceBrl: FormatFloatNumberHelper.format(row.saleTable.costPriceBrl, 100),
        createdAt: row.saleTable.createdAt,
        updatedAt: row.saleTable.updatedAt,
      });

      const product = Product.instance({
        id: row.product.id,
        tid: row.product.tid,
        name: row.product.name,
        description: row.product.description,
        weight: FormatFloatNumberHelper.format(row.product.weight),
        length: FormatFloatNumberHelper.format(row.product.length),
        height: FormatFloatNumberHelper.format(row.product.height),
        width: FormatFloatNumberHelper.format(row.product.width),
        ncm: ProductNCM.create({
          id: row.ncm.id,
          code: row.ncm.code,
          cofins: FormatFloatNumberHelper.format(row.ncm.cofins),
          icms: FormatFloatNumberHelper.format(row.ncm.icms),
          ipi: FormatFloatNumberHelper.format(row.ncm.ipi),
          pis: FormatFloatNumberHelper.format(row.ncm.pis),
          tax: FormatFloatNumberHelper.format(row.ncm.tax),
        }),
      });

      return {
        ...saleTable,
        product,
      };
    });
  }

  async upsert(saleTable: SaleTable): Promise<void> {
    const db = createDatabaseConnection();
    await db
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
      });
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();
    await db.delete(saleTables).where(eq(saleTables.id, id));
  }

  async findLastImportation(productId: string) {
    const db = createDatabaseConnection();
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
      .where(eq(declarationInvoiceProducts.productId, productId))
      .orderBy(desc(declarations.createdAt))
      .limit(1);

    const row = rows[0];
    if (!row) {
      return null;
    }

    return {
      createdAt: row.createdAt,
      quote: FormatFloatNumberHelper.format(row.quote, 10000),
    };
  }

  static instance() {
    return new SaleTableDatabaseRepository();
  }
}

