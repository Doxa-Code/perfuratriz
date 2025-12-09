import { and, eq, notInArray, sql } from "drizzle-orm"
import { db } from "../database"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { Declaration } from "@/core/domain/entities/declaration"
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration"
import { Expense } from "@/core/domain/entities/expense"
import { Invoice } from "@/core/domain/entities/invoice"
import { InvoiceProduct } from "@/core/domain/entities/invoice-product"
import { Product } from "@/core/domain/entities/product"
import { ProductNCM } from "@/core/domain/value-objects/product-ncm"
import {
  declarations,
  declarationEvents,
  declarationExpenses,
  declarationInvoices,
  declarationInvoiceProducts,
  declarationInvoiceProductNcms,
  invoices,
} from "../database/schemas"

export class DeclarationDatabaseRepository {
  async save(declaration: Declaration): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        // 🧾 Declaration
        await tx
          .insert(declarations)
          .values({
            id: declaration.id,
            registration: declaration.registration,
            quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
            createdAt: declaration.createdAt,
            status: declaration.status,
          })
          .onConflictDoUpdate({
            target: declarations.id,
            set: {
              registration: declaration.registration,
              quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
              createdAt: declaration.createdAt,
              status: declaration.status,
            },
          })

        // 🧾 Invoice
        const invoice = declaration.invoice
        await tx
          .insert(declarationInvoices)
          .values({
            id: invoice.id,
            declarationId: declaration.id,
            registration: invoice.registration,
            quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
            createdAt: invoice.createdAt,
          })
          .onConflictDoUpdate({
            target: declarationInvoices.id,
            set: {
              registration: invoice.registration,
              quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
              createdAt: invoice.createdAt,
            },
          })

        // 🧾 Invoice products + NCMs
        await Promise.all(
          invoice.products.map(async (p) => {
            const ncm = p.product.ncm

            await tx
              .insert(declarationInvoiceProducts)
              .values({
                id: p.id,
                invoiceId: invoice.id,
                productId: p.product.id,
                name: p.product.name,
                tid: p.product.tid,
                description: p.product.description,
                weight: p.product.weight,
                length: p.product.length,
                height: p.product.height,
                width: p.product.width,
                amount: FormatFloatNumberHelper.toPersist(p.amount, 100),
                quantity: p.quantity,
              })
              .onConflictDoUpdate({
                target: declarationInvoiceProducts.id,
                set: {
                  amount: FormatFloatNumberHelper.toPersist(p.amount, 100),
                  quantity: p.quantity,
                },
              })

            await tx
              .insert(declarationInvoiceProductNcms)
              .values({
                id: ncm.id,
                productId: p.id,
                code: ncm.code,
                tax: ncm.tax,
                icms: ncm.icms,
                pis: ncm.pis,
                cofins: ncm.cofins,
                ipi: ncm.ipi,
              })
              .onConflictDoUpdate({
                target: declarationInvoiceProductNcms.id,
                set: {
                  code: ncm.code,
                  tax: ncm.tax,
                  icms: ncm.icms,
                  pis: ncm.pis,
                  cofins: ncm.cofins,
                  ipi: ncm.ipi,
                },
              })
          })
        )

        // 💰 Expenses
        await Promise.all(
          declaration.expenses.map(({ expense, amount }) =>
            tx
              .insert(declarationExpenses)
              .values({
                id: expense.id,
                declarationId: declaration.id,
                name: expense.name,
                allocationMethod: expense.allocationMethod,
                currency: expense.currency,
                useICMSBase: expense.useICMSBase,
                useCustomsBase: expense.useCustomsBase,
                amount: FormatFloatNumberHelper.toPersist(amount, 100),
              })
              .onConflictDoUpdate({
                target: declarationExpenses.id,
                set: {
                  name: expense.name,
                  allocationMethod: expense.allocationMethod,
                  currency: expense.currency,
                  useICMSBase: expense.useICMSBase,
                  useCustomsBase: expense.useCustomsBase,
                  amount: FormatFloatNumberHelper.toPersist(amount, 100),
                },
              })
          )
        )

        await tx.insert(declarationEvents).values({
          declarationId: declaration.id,
          type: "CREATED",
          payload: declaration,
        })
      })
    } catch (err) {
      console.error("❌ Error saving declaration:", err)
      throw new Error("Failed to save declaration")
    }
  }

  async update(declaration: Declaration): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        if (declaration.status === "closed" && declaration.invoice.id) {
          await tx
            .update(invoices)
            .set({ status: "closed" })
            .where(eq(invoices.id, declaration.invoice.id))
        }

        // Atualiza declaração e invoice
        await this.save(declaration)

        await tx.insert(declarationEvents).values({
          declarationId: declaration.id,
          type: "UPDATED",
          payload: declaration,
        })
      })
    } catch (err) {
      console.error("❌ Error updating declaration:", err)
      throw new Error("Failed to update declaration")
    }
  }

  async retrieve(id: string): Promise<Declaration | null> {
    try {
      // @ts-ignore
      const [raw] = await db.execute(sql`
        SELECT 
          d.id, d.registration, d.status, d."createdAt", d.quote,
          di.id AS invoice_id, di.registration AS invoice_registration,
          di."createdAt" AS invoice_createdAt, di.quote AS invoice_quote,
          COALESCE(jsonb_agg(DISTINCT jsonb_build_object(
              'id', dip.id, 'productId', dip."productId",
              'name', dip.name, 'tid', dip.tid, 'description', dip.description,
              'weight', dip.weight, 'length', dip.length, 'height', dip.height,
              'width', dip.width, 'amount', dip.amount, 'quantity', dip.quantity,
              'ncm', jsonb_build_object(
                  'id', n.id, 'code', n.code, 'tax', n.tax, 'icms', n.icms,
                  'pis', n.pis, 'cofins', n.cofins, 'ipi', n.ipi
              )
          )), '[]'::jsonb) AS products,
          COALESCE(jsonb_agg(DISTINCT jsonb_build_object(
              'id', de.id, 'name', de.name,
              'useICMSBase', de."useICMSBase",
              'useCustomsBase', de."useCustomsBase",
              'allocationMethod', de."allocationMethod",
              'currency', de.currency, 'amount', de.amount
          )), '[]'::jsonb) AS expenses
        FROM perfuratriz.declarations d
        LEFT JOIN perfuratriz.declaration_invoices di ON di."declarationId" = d.id
        LEFT JOIN perfuratriz.declaration_invoice_products dip ON dip."invoiceId" = di.id
        LEFT JOIN perfuratriz.products p ON p.id = dip."productId"
        LEFT JOIN perfuratriz.ncms n ON n.id = p."ncmId"
        LEFT JOIN perfuratriz.declaration_expenses de ON de."declarationId" = d.id
        WHERE d.id = ${id}
        GROUP BY d.id, di.id;
      `)

      if (!raw) return null

      const invoice = Invoice.instance({
        id: raw.invoice_id ?? "",
        registration: raw.invoice_registration ?? "",
        createdAt: raw.invoice_createdAt
          ? new Date(raw.invoice_createdAt)
          : new Date(),
        quote: FormatFloatNumberHelper.format(raw.invoice_quote ?? 0, 10000),
        status: raw.status,
        products: (raw.products ?? []).map((p: any) =>
          InvoiceProduct.create({
            id: p.id ?? "",
            quantity: p.quantity ?? 0,
            amount: FormatFloatNumberHelper.format(p.amount ?? 0, 100),
            product: Product.instance({
              id: p.productId ?? "",
              tid: p.tid ?? "",
              name: p.name ?? "",
              description: p.description ?? "",
              weight: p.weight ?? 0,
              length: p.length ?? 0,
              height: p.height ?? 0,
              width: p.width ?? 0,
              ncm: ProductNCM.create({
                id: p.ncm?.id ?? "",
                code: p.ncm?.code ?? 0,
                icms: p.ncm?.icms ?? 0,
                pis: p.ncm?.pis ?? 0,
                cofins: p.ncm?.cofins ?? 0,
                ipi: p.ncm?.ipi ?? 0,
                tax: p.ncm?.tax ?? 0,
              }),
            }),
          })
        ),
      })

      const expenses = (raw.expenses ?? [])
        .filter((e: any) => !!e.id)
        .map((e: any) =>
          ExpenseDeclaration.create({
            expense: Expense.instance({
              id: e.id ?? "",
              name: e.name ?? "",
              useICMSBase: e.useICMSBase ?? false,
              useCustomsBase: e.useCustomsBase ?? false,
              allocationMethod: e.allocationMethod ?? "NET_VALUE",
              currency: e.currency ?? "BRL",
            }),
            amount: FormatFloatNumberHelper.format(e.amount ?? 0, 100),
          })
        )

      return Declaration.instance({
        id: raw.id ?? "",
        registration: raw.registration ?? "",
        createdAt: raw.createdAt ? new Date(raw.createdAt) : new Date(),
        quote: FormatFloatNumberHelper.format(raw.quote ?? 0, 10000),
        invoice,
        expenses,
        status: raw.status,
      })
    } catch (err) {
      console.error("❌ Error retrieving declaration:", err)
      throw new Error("Failed to retrieve declaration")
    }
  }

  async list(): Promise<Declaration[]> {
    try {
      const rows = await db.execute(sql`
        SELECT 
          d.id, d.registration, d.status, d."createdAt", d.quote,
          di.id AS invoice_id, di.registration AS invoice_registration,
          di."createdAt" AS invoice_createdAt, di.quote AS invoice_quote,
          jsonb_agg(DISTINCT jsonb_build_object(
              'id', dip.id, 'productId', dip."productId",
              'name', dip.name, 'tid', dip.tid, 'description', dip.description,
              'weight', dip.weight, 'length', dip.length, 'height', dip.height,
              'width', dip.width, 'amount', dip.amount, 'quantity', dip.quantity,
              'ncm', jsonb_build_object(
                  'id', n.id, 'code', n.code, 'tax', n.tax, 'icms', n.icms,
                  'pis', n.pis, 'cofins', n.cofins, 'ipi', n.ipi
              )
          )) AS products,
          jsonb_agg(DISTINCT jsonb_build_object(
              'id', de.id, 'name', de.name,
              'useICMSBase', de."useICMSBase",
              'useCustomsBase', de."useCustomsBase",
              'allocationMethod', de."allocationMethod",
              'currency', de.currency, 'amount', de.amount
          )) AS expenses
        FROM perfuratriz.declarations d
        LEFT JOIN perfuratriz.declaration_invoices di ON di."declarationId" = d.id
        LEFT JOIN perfuratriz.declaration_invoice_products dip ON dip."invoiceId" = di.id
        LEFT JOIN perfuratriz.products p ON p.id = dip."productId"
        LEFT JOIN perfuratriz.ncms n ON n.id = p."ncmId"
        LEFT JOIN perfuratriz.declaration_expenses de ON de."declarationId" = d.id
        GROUP BY d.id, di.id;
      `)
        // @ts-ignore
      return rows.map((raw) =>
        Declaration.instance({
          id: raw.id ?? "",
          registration: raw.registration ?? "",
          createdAt: raw.createdAt ? new Date(raw.createdAt) : new Date(),
          quote: FormatFloatNumberHelper.format(raw.quote ?? 0, 10000),
          invoice: Invoice.instance({
            id: raw.invoice_id ?? "",
            registration: raw.invoice_registration ?? "",
            createdAt: raw.invoice_createdAt
              ? new Date(raw.invoice_createdAt)
              : new Date(),
            quote: FormatFloatNumberHelper.format(raw.invoice_quote ?? 0, 10000),
            status: raw.status,
            products: (raw.products ?? []).map((p: any) =>
              InvoiceProduct.create({
                id: p.id ?? "",
                quantity: p.quantity ?? 0,
                amount: FormatFloatNumberHelper.format(p.amount ?? 0, 100),
                product: Product.instance({
                  id: p.productId ?? "",
                  tid: p.tid ?? "",
                  name: p.name ?? "",
                  description: p.description ?? "",
                  weight: p.weight ?? 0,
                  length: p.length ?? 0,
                  height: p.height ?? 0,
                  width: p.width ?? 0,
                  ncm: ProductNCM.create({
                    id: p.ncm?.id ?? "",
                    code: p.ncm?.code ?? 0,
                    icms: p.ncm?.icms ?? 0,
                    pis: p.ncm?.pis ?? 0,
                    cofins: p.ncm?.cofins ?? 0,
                    ipi: p.ncm?.ipi ?? 0,
                    tax: p.ncm?.tax ?? 0,
                  }),
                }),
              })
            ),
          }),
          expenses: (raw.expenses ?? [])
            .filter((e: any) => !!e.id)
            .map((e: any) =>
              ExpenseDeclaration.create({
                expense: Expense.instance({
                  id: e.id ?? "",
                  name: e.name ?? "",
                  useICMSBase: e.useICMSBase ?? false,
                  useCustomsBase: e.useCustomsBase ?? false,
                  allocationMethod: e.allocationMethod ?? "NET_VALUE",
                  currency: e.currency ?? "BRL",
                }),
                amount: FormatFloatNumberHelper.format(e.amount ?? 0, 100),
              })
            ),
          status: raw.status,
        })
      )
    } catch (err) {
      console.error("❌ Error listing declarations:", err)
      throw new Error("Failed to list declarations")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const declaration = await this.retrieve(id)
      if (!declaration) return

      await db.transaction(async (tx) => {
        await tx.delete(declarations).where(eq(declarations.id, id))
        await tx.insert(declarationEvents).values({
          declarationId: declaration.id,
          type: "DELETED",
          payload: declaration,
        })
      })
    } catch (err) {
      console.error("❌ Error deleting declaration:", err)
      throw new Error("Failed to delete declaration")
    }
  }

  static instance() {
    return new DeclarationDatabaseRepository()
  }
}

export const declarationRepository = new DeclarationDatabaseRepository()
