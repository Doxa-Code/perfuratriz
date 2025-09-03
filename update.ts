import { createDatabaseConnection } from "@/core/infra/database";
import {
  invoices,
  invoiceProducts,
  products,
  ncms,
  expenses,
  declarations,
  declarationExpenses,
  declarationInvoices,
  declarationInvoiceProducts,
  declarationInvoiceProductNcms,
} from "@/core/infra/database/schemas";
import invoicesData from "./backups/invoices.json";
import invoicesProductsData from "./backups/invoice_products.json";
import ncmsData from "./backups/ncms.json";
import productsData from "./backups/products.json";
import expensesData from "./backups/expenses.json";
import declarationData from "./backups/declarations.json";
import declarationExpenseData from "./backups/declaration_expenses.json";
import declarationInvoiceData from "./backups/declaration_invoices.json";
import declarationInvoiceProductData from "./backups/declaration_invoice_products.json";
import { eq } from "drizzle-orm";

const db = createDatabaseConnection();
await db.transaction(async (tx) => {
  await Promise.all(
    invoicesData.map(async (invoice) => {
      await tx
        .insert(invoices)
        .values({
          quote: invoice.quote,
          registration: invoice.registration,
          createdAt: new Date(invoice.createdAt),
          id: invoice.id,
        })
        .onConflictDoUpdate({
          set: {
            quote: invoice.quote,
            registration: invoice.registration,
            createdAt: new Date(invoice.createdAt),
          },
          target: invoices.id,
        });
    })
  );

  await Promise.all(
    ncmsData.map(async (ncm) => {
      await tx
        .insert(ncms)
        .values({
          code: ncm.code,
          cofins: ncm.cofins,
          icms: ncm.icms,
          ipi: ncm.ipi,
          pis: ncm.pis,
          tax: ncm.tax,
          id: ncm.id,
        })
        .onConflictDoUpdate({
          set: {
            code: ncm.code,
            cofins: ncm.cofins,
            icms: ncm.icms,
            ipi: ncm.ipi,
            pis: ncm.pis,
            tax: ncm.tax,
          },
          target: ncms.id,
        });
    })
  );

  await Promise.all(
    productsData.map(async (p) => {
      await tx
        .insert(products)
        .values({
          height: p.height,
          length: p.length,
          ncmId: p.ncmId,
          weight: p.weight,
          width: p.width,
          description: p.description,
          id: p.id,
          name: p.name,
          tid: p.tid,
        })
        .onConflictDoUpdate({
          set: {
            height: p.height,
            length: p.length,
            ncmId: p.ncmId,
            weight: p.weight,
            width: p.width,
            description: p.description,
            id: p.id,
            name: p.name,
            tid: p.tid,
          },
          target: products.id,
        });
    })
  );

  await Promise.all(
    invoicesProductsData.map(async (ip) => {
      await tx
        .insert(invoiceProducts)
        .values({
          amount: ip.amount,
          invoiceId: ip.invoiceId,
          productId: ip.productId,
          quantity: ip.quantity,
          id: ip.id,
        })
        .onConflictDoUpdate({
          set: {
            amount: ip.amount,
            invoiceId: ip.invoiceId,
            productId: ip.productId,
            quantity: ip.quantity,
          },
          target: invoiceProducts.id,
        });
    })
  );

  await Promise.all(
    expensesData.map(async (e) => {
      await tx
        .insert(expenses)
        .values({
          allocationMethod: e.allocationMethod as
            | "NET_WEIGHT"
            | "NET_VALUE"
            | "PER_UNIT",
          currency: e.currency as "BRL" | "USD",
          name: e.name,
          id: e.id,
          useCustomsBase: e.useCustomsBase,
          useICMSBase: e.useICMSBase,
        })
        .onConflictDoUpdate({
          set: {
            allocationMethod: e.allocationMethod as
              | "NET_WEIGHT"
              | "NET_VALUE"
              | "PER_UNIT",
            currency: e.currency as "BRL" | "USD",
            name: e.name,
            useCustomsBase: e.useCustomsBase,
            useICMSBase: e.useICMSBase,
          },
          target: expenses.id,
        });
    })
  );

  await Promise.all(
    declarationData.map(async (d) => {
      await tx
        .insert(declarations)
        .values({
          quote: d.quote,
          registration: d.registration,
          createdAt: new Date(d.createdAt),
          id: d.id,
        })
        .onConflictDoUpdate({
          set: {
            quote: d.quote,
            registration: d.registration,
            createdAt: new Date(d.createdAt),
          },
          target: declarations.id,
        });
    })
  );

  await Promise.all(
    declarationExpenseData.map(async (d) => {
      await tx
        .insert(declarationExpenses)
        .values({
          allocationMethod: d.allocationMethod as
            | "NET_VALUE"
            | "NET_WEIGHT"
            | "PER_UNIT",
          currency: d.currency as "BRL" | "USD",
          declarationId: d.declaration,
          name: d.name,
          amount: d.amount,
          useCustomsBase: d.useCustomsBase,
          useICMSBase: d.useICMSBase,
          id: d.id,
        })
        .onConflictDoUpdate({
          set: {
            allocationMethod: d.allocationMethod as
              | "NET_VALUE"
              | "NET_WEIGHT"
              | "PER_UNIT",
            currency: d.currency as "BRL" | "USD",
            declarationId: d.declaration,
            name: d.name,
            amount: d.amount,
            useCustomsBase: d.useCustomsBase,
            useICMSBase: d.useICMSBase,
          },
          target: declarationExpenses.id,
        });
    })
  );

  await Promise.all(
    declarationInvoiceData.map(async (d) => {
      await tx
        .insert(declarationInvoices)
        .values({
          declarationId: d.declaration,
          quote: d.quote,
          registration: d.registration,
          createdAt: new Date(d.createdAt),
          id: d.id,
        })
        .onConflictDoUpdate({
          set: {
            declarationId: d.declaration,
            quote: d.quote,
            registration: d.registration,
            createdAt: new Date(d.createdAt),
          },
          target: declarationInvoices.id,
        });
    })
  );

  await Promise.all(
    declarationInvoiceProductData.map(async (d) => {
      const result = await tx
        .select({ ncms })
        .from(ncms)
        .leftJoin(products, eq(products.ncmId, ncms.id))
        .where(eq(products.id, d.productId));

      const ncm = result?.[0]?.ncms;

      if (!ncm) return;

      await tx
        .insert(declarationInvoiceProductNcms)
        .values({
          code: ncm.code,
          cofins: ncm.cofins,
          icms: ncm.icms,
          ipi: ncm.ipi,
          pis: ncm.pis,
          productId: d.id,
          tax: ncm.tax,
          id: ncm.id,
        })
        .onConflictDoUpdate({
          set: {
            code: ncm.code,
            cofins: ncm.cofins,
            icms: ncm.icms,
            ipi: ncm.ipi,
            pis: ncm.pis,
            productId: d.id,
            tax: ncm.tax,
          },
          target: ncms.id,
        });

      await tx
        .insert(declarationInvoiceProducts)
        .values({
          amount: d.amount,
          height: d.height,
          invoiceId: d.invoice,
          length: d.length,
          productId: d.productId,
          quantity: d.quantity,
          weight: d.weight,
          width: d.width,
          description: d.description,
          name: d.name,
          tid: d.tid,
          id: d.id,
        })
        .onConflictDoUpdate({
          set: {
            amount: d.amount,
            height: d.height,
            invoiceId: d.invoice,
            length: d.length,
            productId: d.productId,
            quantity: d.quantity,
            weight: d.weight,
            width: d.width,
            description: d.description,
            name: d.name,
            tid: d.tid,
          },
          target: declarationInvoiceProducts.id,
        });
    })
  );
});
process.exit(0);
