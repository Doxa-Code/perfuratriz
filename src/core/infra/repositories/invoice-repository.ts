import { eq, sql } from "drizzle-orm"
import { randomUUID } from "crypto"
import { db } from "../database" // ✅ conexão única (sem recriar a cada chamada)
import { invoices, invoiceProducts, invoiceEvents } from "../database/schemas"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { Invoice } from "@/core/domain/entities/invoice"
import { InvoiceProduct } from "@/core/domain/entities/invoice-product"
import { Product } from "@/core/domain/entities/product"
import { NCM } from "@/core/domain/entities/ncm"

export class InvoiceDatabaseRepository {
  private mapRowToEntity(invoice: any): Invoice {
    return Invoice.instance({
      id: invoice.id,
      registration: invoice.registration,
      createdAt: new Date(invoice.createdAt),
      status: invoice.status,
      quote: FormatFloatNumberHelper.format(invoice.quote, 10000),
      products: (invoice.products ?? []).map((p: any) =>
        InvoiceProduct.create({
          ...p,
          amount: FormatFloatNumberHelper.format(p.amount, 10000),
          product: Product.instance({
            ...p.product,
            ncm: NCM.instance(p.product.ncm),
          }),
        })
      ),
    })
  }

  async retrieve(id: string): Promise<Invoice | null> {
    try {
      // @ts-ignore
      const [row] = await db.execute(sql`
        SELECT 
          i.id,
          i.registration,
          i."createdAt",
          i.quote,
          i.status,
          COALESCE(
            jsonb_agg(
              jsonb_build_object(
                'id', ip.id,
                'amount', ip.amount,
                'quantity', ip.quantity,
                'product', jsonb_build_object(
                  'id', p.id,
                  'tid', p.tid,
                  'name', p.name,
                  'width', p.width,
                  'height', p.height,
                  'length', p.length,
                  'weight', p.weight,
                  'description', p.description,
                  'ncm', jsonb_build_object(
                    'id', n.id,
                    'code', n.code,
                    'tax', n.tax,
                    'icms', n.icms,
                    'pis', n.pis,
                    'cofins', n.cofins,
                    'ipi', n.ipi,
                    'pisSales', n.pis_sales,
                    'cofinsSales', n.cofins_sales,
                    'difal', n.difal,
                    'reductionCalculationBase', n.reduction_calculation_base_value
                  )
                )
              )
            ) FILTER (WHERE ip.id IS NOT NULL),
            '[]'::jsonb
          ) AS products
        FROM perfuratriz.invoices i
        LEFT JOIN perfuratriz.invoice_products ip ON ip."invoiceId" = i.id
        LEFT JOIN perfuratriz.products p ON p.id = ip."productId"
        LEFT JOIN perfuratriz.ncms n ON n.id = p."ncmId"
        WHERE i.id = ${id}
        GROUP BY i.id;
      `)

      if (!row) return null
      return this.mapRowToEntity(row)
    } catch (err) {
      console.error("❌ Error retrieving invoice:", err)
      throw new Error("Failed to retrieve invoice")
    }
  }

  async list(): Promise<Invoice[]> {
    try {
      const rows = await db.execute(sql`
        SELECT 
          i.id,
          i.registration,
          i."createdAt",
          i.quote,
          i.status,
          COALESCE(
            jsonb_agg(
              jsonb_build_object(
                'id', ip.id,
                'amount', ip.amount,
                'quantity', ip.quantity,
                'product', jsonb_build_object(
                  'id', p.id,
                  'tid', p.tid,
                  'name', p.name,
                  'width', p.width,
                  'height', p.height,
                  'length', p.length,
                  'weight', p.weight,
                  'description', p.description,
                  'ncm', jsonb_build_object(
                    'id', n.id,
                    'code', n.code,
                    'tax', n.tax,
                    'icms', n.icms,
                    'pis', n.pis,
                    'cofins', n.cofins,
                    'ipi', n.ipi,
                    'pisSales', n.pis_sales,
                    'cofinsSales', n.cofins_sales,
                    'difal', n.difal,
                    'reductionCalculationBase', n.reduction_calculation_base_value
                  )
                )
              )
            ) FILTER (WHERE ip.id IS NOT NULL),
            '[]'::jsonb
          ) AS products
        FROM perfuratriz.invoices i
        LEFT JOIN perfuratriz.invoice_products ip ON ip."invoiceId" = i.id
        LEFT JOIN perfuratriz.products p ON p.id = ip."productId"
        LEFT JOIN perfuratriz.ncms n ON n.id = p."ncmId"
        GROUP BY i.id;
      `)
    // @ts-ignore
      return rows.map((row) => this.mapRowToEntity(row))
    } catch (err) {
      console.error("❌ Error listing invoices:", err)
      throw new Error("Failed to list invoices")
    }
  }

  async save(invoice: Invoice): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.insert(invoices).values({
          id: invoice.id,
          registration: invoice.registration,
          createdAt: invoice.createdAt,
          quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
          status: invoice.status,
        })

        for (const p of invoice.products) {
          await tx
            .insert(invoiceProducts)
            .values({
              id: p.id,
              amount: BigInt(FormatFloatNumberHelper.toPersist(p.amount, 10000)),
              invoiceId: invoice.id,
              productId: p.product.id,
              quantity: p.quantity,
            })
            .onConflictDoUpdate({
              target: invoiceProducts.id, // ✅ corrigido
              set: {
                amount: sql`excluded.amount`,
                invoiceId: sql`excluded."invoiceId"`,
                productId: sql`excluded."productId"`,
                quantity: sql`excluded.quantity`,
              },
            })
        }

        await tx.insert(invoiceEvents).values({
          id: randomUUID(),
          invoiceId: invoice.id,
          type: "CREATED",
          payload: invoice,
        })
      })
    } catch (err) {
      console.error("❌ Error saving invoice:", err)
      throw new Error("Failed to save invoice")
    }
  }

  async update(invoice: Invoice): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(invoices)
          .set({
            registration: invoice.registration,
            quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
            createdAt: invoice.createdAt,
          })
          .where(eq(invoices.id, invoice.id))

        for (const p of invoice.products) {
          await tx
            .insert(invoiceProducts)
            .values({
              id: p.id,
              amount: BigInt(FormatFloatNumberHelper.toPersist(p.amount, 10000)),
              invoiceId: invoice.id,
              productId: p.product.id,
              quantity: p.quantity,
            })
            .onConflictDoUpdate({
              target: invoiceProducts.id,
              set: {
                amount: sql`excluded.amount`,
                quantity: sql`excluded.quantity`,
              },
            })
        }

        await tx.insert(invoiceEvents).values({
          id: randomUUID(),
          invoiceId: invoice.id,
          type: "UPDATED",
          payload: invoice,
        })
      })
    } catch (err) {
      console.error("❌ Error updating invoice:", err)
      throw new Error("Failed to update invoice")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const invoice = await this.retrieve(id)
      if (!invoice) return

      await db.transaction(async (tx) => {
        await tx.delete(invoiceProducts).where(eq(invoiceProducts.invoiceId, id))
        await tx.delete(invoices).where(eq(invoices.id, id))
        await tx.insert(invoiceEvents).values({
          id: randomUUID(),
          invoiceId: invoice.id,
          type: "DELETED",
          payload: invoice,
        })
      })
    } catch (err) {
      console.error("❌ Error removing invoice:", err)
      throw new Error("Failed to remove invoice")
    }
  }
}

export const invoiceRepository = new InvoiceDatabaseRepository()
