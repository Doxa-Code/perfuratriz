import products from "./backups/products.json";
import ncms from "./backups/ncms.json";
import expenses from "./backups/expenses.json";
import invoices from "./backups/invoices.json";
import invoiceProducts from "./backups/invoice_products.json";
import declarations from "./backups/declarations.json";
import declarationInvoices from "./backups/declaration_invoices.json";
import declarationInvoiceProducts from "./backups/declaration_invoice_products.json";
import declarationExpenses from "./backups/declaration_expenses.json";

import pgp from "pg-promise";

const db = pgp()(
  "postgresql://postgres.gretvzngagbiapquicqk:KkAY0GQuzyk9f10V@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"
);

await Promise.all(
  declarationExpenses.map(async (expense) => {
    await db.query(
      `INSERT INTO public.declaration_expenses (
        id,
        name,
        use_icms_base,
        use_customs_base,
        allocation_method,
        currency,
        amount,
        declaration_expense_id,
        enable,
        event,
        registered_at,
        declaration
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      [
        expense.id,
        expense.name,
        expense.useICMSBase,
        expense.useCustomsBase,
        expense.allocationMethod,
        expense.currency,
        expense.amount,
        expense.declarationExpenseId,
        expense.enable,
        expense.event,
        expense.registeredAt,
        expense.declaration,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  declarationInvoiceProducts.map(async (item) => {
    await db.query(
      `INSERT INTO public.declaration_invoice_products (
        id,
        name,
        declaration_invoice_product_id,
        tid,
        description,
        weight,
        length,
        height,
        width,
        quantity,
        event,
        registered_at,
        amount,
        enable,
        product_id,
        invoice
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
      [
        item.id,
        item.name,
        item.declarationInvoiceProductId,
        item.tid,
        item.description,
        item.weight,
        item.length,
        item.height,
        item.width,
        item.quantity,
        item.event,
        item.registeredAt,
        item.amount,
        item.enable,
        item.productId,
        item.invoice,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  declarationInvoices.map(async (invoice) => {
    await db.query(
      `INSERT INTO public.declaration_invoices (
        id,
        created_at,
        event,
        enable,
        registered_at,
        declaration,
        declaration_invoice_id,
        registration,
        quote
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        invoice.id,
        invoice.createdAt,
        invoice.event,
        invoice.enable,
        invoice.registeredAt,
        invoice.declaration,
        invoice.declarationInvoiceId,
        invoice.registration,
        invoice.quote,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  declarations.map(async (item) => {
    await db.query(
      `INSERT INTO public.declarations 
      (id, registration, quote, created_at, declaration_id, enable, event, registered_at) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        item.id,
        item.registration,
        item.quote,
        item.createdAt,
        item.declarationId,
        item.enable,
        item.event,
        item.registeredAt,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  invoiceProducts.map(async (item) => {
    await db.query(
      `INSERT INTO public.invoice_products
      (invoice_product_id, id, product_id, amount, quantity, "event", enable, registered_at, invoice_id)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [
        item.invoiceProductId,
        item.id,
        item.productId,
        item.amount,
        item.quantity,
        item.event,
        item.enable,
        item.registeredAt,
        item.invoiceId,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  invoices.map(async (invoice) => {
    await db.query(
      `INSERT INTO public.invoices
      (invoice_id, id, registration, created_at, quote, enable, event, registered_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        invoice.invoiceId,
        invoice.id,
        invoice.registration,
        invoice.createdAt,
        invoice.quote,
        invoice.enable,
        invoice.event,
        invoice.registeredAt,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  expenses.map(async (expense) => {
    await db.query(
      `INSERT INTO public.expenses
      (id, name, use_icms_base, use_customs_base, allocation_method, currency)
      VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        expense.id,
        expense.name,
        expense.useICMSBase,
        expense.useCustomsBase,
        expense.allocationMethod,
        expense.currency,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  ncms.map(async (ncm) => {
    await db.query(
      `INSERT INTO public.ncms (ncm_id, id, code, tax, icms, pis, cofins, ipi, "event", "enable", registered_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        ncm.ncmId,
        ncm.id,
        ncm.code,
        ncm.tax,
        ncm.icms,
        ncm.pis,
        ncm.cofins,
        ncm.ipi,
        ncm.event,
        ncm.enable,
        ncm.registeredAt,
      ]
    );
  })
).catch(() => {});

await Promise.all(
  products.map(async (product) => {
    await db.query(
      `INSERT INTO public.products
      (id, name, weight, length, height, width, ncm_id, tid, description, enable, "event", product_id, registered_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        product.id,
        product.name,
        product.weight,
        product.length,
        product.height,
        product.width,
        product.ncmId,
        product.tid,
        product.description,
        product.enable,
        product.event,
        product.productId,
        product.registeredAt,
      ]
    );
  })
).catch(() => {});

process.exit(0);
