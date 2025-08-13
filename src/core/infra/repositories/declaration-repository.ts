import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Declaration } from "@/core/domain/entities/declaration";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { Product } from "@/core/domain/entities/product";
import { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { and, eq, notInArray } from "drizzle-orm";
import { createDatabaseConnection } from "../database";
import {
  declarationEvents,
  declarationExpenses,
  declarationInvoiceProductNcms,
  declarationInvoiceProducts,
  declarationInvoices,
  declarations,
} from "../database/schemas";
import { Expense } from "@/core/domain/entities/expense";

export interface DeclarationRepository {
  save(declaration: Declaration): Promise<void>;
  retrieve(id: string): Promise<Declaration | null>;
  list(): Promise<Declaration[]>;
  remove(id: string): Promise<void>;
}

export class DeclarationDatabaseRepository implements DeclarationRepository {
  async save(declaration: Declaration): Promise<void> {
    const db = createDatabaseConnection();

    await db.transaction(async (tx) => {
      await tx
        .insert(declarations)
        .values({
          id: declaration.id,
          registration: declaration.registration,
          quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
          createdAt: declaration.createdAt,
        })
        .onConflictDoUpdate({
          target: declarations.id,
          set: {
            registration: declaration.registration,
            quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
            createdAt: declaration.createdAt,
          },
        });

      const invoice: Invoice = declaration.invoice;
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
        });

      await Promise.all(
        invoice.products.map(async (p) => {
          const ncm = p.product.ncm;
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
            });

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
            });
        })
      );

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
      );

      await tx.insert(declarationEvents).values({
        declarationId: declaration.id,
        type: "CREATED",
        payload: declaration,
      });
    });

    await db.$client.end();
  }

  async update(declaration: Declaration): Promise<void> {
    const db = createDatabaseConnection();

    await db.transaction(async (tx) => {
      await tx
        .insert(declarations)
        .values({
          id: declaration.id,
          registration: declaration.registration,
          quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
          createdAt: declaration.createdAt,
        })
        .onConflictDoUpdate({
          target: declarations.id,
          set: {
            registration: declaration.registration,
            quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
            createdAt: declaration.createdAt,
          },
        });

      const invoice: Invoice = declaration.invoice;
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
        });
      const productIds = invoice.products.map((p) => p.id);
      await tx
        .delete(declarationInvoiceProducts)
        .where(
          and(
            eq(declarationInvoiceProducts.invoiceId, invoice.id),
            notInArray(declarationInvoiceProducts.id, productIds)
          )
        );
      await Promise.all(
        invoice.products.map(async (p) => {
          const ncm = p.product.ncm;
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
            });

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
            });
        })
      );

      const expensesId = declaration.expenses.map((e) => e.expense.id);
      await tx
        .delete(declarationExpenses)
        .where(
          and(
            eq(declarationExpenses.declarationId, declaration.id),
            notInArray(declarationExpenses.id, expensesId)
          )
        );

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
      );

      await tx.insert(declarationEvents).values({
        declarationId: declaration.id,
        type: "UPDATED",
        payload: declaration,
      });
    });

    await db.$client.end();
  }

  async retrieve(id: string): Promise<Declaration | null> {
    const db = createDatabaseConnection();
    const [declarationRaw] = await db.$client<any[]>`
			SELECT 
				d.id,
				d.registration,
				d."createdAt",
				d.quote,
				di.id AS invoice_id,
				di.registration AS invoice_registration,
				di."createdAt" AS invoice_createdAt,
				di.quote AS invoice_quote,
				jsonb_agg(DISTINCT jsonb_build_object(
					'id', dip.id,
					'productId', dip."productId",
					'name', dip.name,
					'tid', dip.tid,
					'description', dip.description,
					'weight', dip.weight,
					'length', dip.length,
					'height', dip.height,
					'width', dip.width,
					'amount', dip.amount,
					'quantity', dip.quantity,
					'ncm', jsonb_build_object(
						'id', n.id,
						'code', n.code,
						'tax', n.tax,
						'icms', n.icms,
						'pis', n.pis,
						'cofins', n.cofins,
						'ipi', n.ipi
					)
				)) AS products,
				jsonb_agg(DISTINCT jsonb_build_object(
					'id', de.id,
					'name', de.name,
					'useICMSBase', de."useICMSBase",
					'useCustomsBase', de."useCustomsBase",
					'allocationMethod', de."allocationMethod",
					'currency', de.currency,
					'amount', de.amount
				)) AS expenses
			FROM declarations d
			LEFT JOIN declaration_invoices di
				ON di."declarationId" = d.id
			LEFT JOIN declaration_invoice_products dip
				ON dip."invoiceId" = di.id
			LEFT JOIN ncms n
				ON n.id = dip."productId" -- ou ajuste conforme seu relacionamento de NCM
			LEFT JOIN declaration_expenses de
				ON de."declarationId" = d.id
			WHERE d.id = ${id}
			GROUP BY d.id, d.registration, d."createdAt", d.quote, di.id, di.registration, di."createdAt", di.quote;
		`;
    await db.$client.end();

    if (!declarationRaw) return null;
    const invoice = Invoice.instance({
      id: declarationRaw.invoice_id ?? "", // default string
      registration: declarationRaw.invoice_registration ?? "",
      createdAt: declarationRaw.invoice_createdAt
        ? new Date(declarationRaw.invoice_createdAt)
        : new Date(),
      quote: FormatFloatNumberHelper.format(
        declarationRaw.invoice_quote ?? 0,
        10000
      ),
      products: (declarationRaw.products ?? []).map((p: any) =>
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
    });

    const expenses = (declarationRaw.expenses ?? [])
      .filter((d: any) => !!d.id)
      .map((e: any) =>
        ExpenseDeclaration.create({
          expense: Expense.instance({
            id: e.id ?? "",
            name: e.name ?? "",
            useICMSBase: e.useICMSBase ?? false,
            useCustomsBase: e.useCustomsBase ?? false,
            allocationMethod: e.allocationMethod ?? "NET_VALUE", // default enum
            currency: e.currency ?? "BRL", // default enum
          }),
          amount: FormatFloatNumberHelper.format(e.amount ?? 0, 100),
        })
      );

    return Declaration.instance({
      id: declarationRaw.id ?? "",
      registration: declarationRaw.registration ?? "",
      createdAt: declarationRaw.createdAt
        ? new Date(declarationRaw.createdAt)
        : new Date(),
      quote: FormatFloatNumberHelper.format(declarationRaw.quote ?? 0, 10000),
      invoice,
      expenses,
    });
  }

  async list(): Promise<Declaration[]> {
    const db = createDatabaseConnection();
    const declarationsRaw = await db.$client<any[]>`
			SELECT 
				d.id,
				d.registration,
				d."createdAt",
				d.quote,
				di.id AS invoice_id,
				di.registration AS invoice_registration,
				di."createdAt" AS invoice_createdAt,
				di.quote AS invoice_quote,
				jsonb_agg(DISTINCT jsonb_build_object(
					'id', dip.id,
					'productId', dip."productId",
					'name', dip.name,
					'tid', dip.tid,
					'description', dip.description,
					'weight', dip.weight,
					'length', dip.length,
					'height', dip.height,
					'width', dip.width,
					'amount', dip.amount,
					'quantity', dip.quantity,
					'ncm', jsonb_build_object(
						'id', n.id,
						'code', n.code,
						'tax', n.tax,
						'icms', n.icms,
						'pis', n.pis,
						'cofins', n.cofins,
						'ipi', n.ipi
					)
				)) AS products,
				jsonb_agg(DISTINCT jsonb_build_object(
					'id', de.id,
					'name', de.name,
					'useICMSBase', de."useICMSBase",
					'useCustomsBase', de."useCustomsBase",
					'allocationMethod', de."allocationMethod",
					'currency', de.currency,
					'amount', de.amount
				)) AS expenses
			FROM declarations d
			LEFT JOIN declaration_invoices di
				ON di."declarationId" = d.id
			LEFT JOIN declaration_invoice_products dip
				ON dip."invoiceId" = di.id
			LEFT JOIN ncms n
				ON n.id = dip."productId"
			LEFT JOIN declaration_expenses de
				ON de."declarationId" = d.id
			GROUP BY d.id, d.registration, d."createdAt", d.quote, di.id, di.registration, di."createdAt", di.quote;
		`;
    await db.$client.end();

    return declarationsRaw.map((declarationRaw) => {
      const invoice = Invoice.instance({
        id: declarationRaw.invoice_id ?? "", // default string
        registration: declarationRaw.invoice_registration ?? "",
        createdAt: declarationRaw.invoice_createdAt
          ? new Date(declarationRaw.invoice_createdAt)
          : new Date(),
        quote: FormatFloatNumberHelper.format(
          declarationRaw.invoice_quote ?? 0,
          10000
        ),
        products: (declarationRaw.products ?? []).map((p: any) =>
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
      });

      const expenses = (declarationRaw.expenses ?? [])
        .filter((d: any) => !!d.id)
        .map((e: any) =>
          ExpenseDeclaration.create({
            expense: Expense.instance({
              id: e.id ?? "",
              name: e.name ?? "",
              useICMSBase: e.useICMSBase ?? false,
              useCustomsBase: e.useCustomsBase ?? false,
              allocationMethod: e.allocationMethod ?? "NET_VALUE", // default enum
              currency: e.currency ?? "BRL", // default enum
            }),
            amount: FormatFloatNumberHelper.format(e.amount ?? 0, 100),
          })
        );

      return Declaration.instance({
        id: declarationRaw.id ?? "",
        registration: declarationRaw.registration ?? "",
        createdAt: declarationRaw.createdAt
          ? new Date(declarationRaw.createdAt)
          : new Date(),
        quote: FormatFloatNumberHelper.format(declarationRaw.quote ?? 0, 10000),
        invoice,
        expenses,
      });
    });
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();
    const declaration = await this.retrieve(id);
    if (!declaration) return;
    await db.transaction(async (tx) => {
      await tx.delete(declarations).where(eq(declarations.id, id));
      await tx.insert(declarationEvents).values({
        declarationId: declaration.id,
        payload: declaration,
        type: "DELETED",
      });
    });
    await db.$client.end();
  }

  static instance(): DeclarationDatabaseRepository {
    return new DeclarationDatabaseRepository();
  }
}
