ALTER TABLE "declaration_events" DROP CONSTRAINT "declaration_events_declarationId_declarations_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_expense_events" DROP CONSTRAINT "declaration_expense_events_declarationExpenseId_declaration_expenses_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoice_events" DROP CONSTRAINT "declaration_invoice_events_declarationInvoiceId_declaration_invoices_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_events" DROP CONSTRAINT "declaration_invoice_product_events_declarationInvoiceProductId_declaration_invoice_products_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncm_events" DROP CONSTRAINT "declaration_invoice_product_ncm_events_declarationInvoiceProductNcmId_declaration_invoice_product_ncms_id_fk";
--> statement-breakpoint
ALTER TABLE "expense_events" DROP CONSTRAINT "expense_events_expenseId_expenses_id_fk";
--> statement-breakpoint
ALTER TABLE "invoice_events" DROP CONSTRAINT "invoice_events_invoiceId_invoices_id_fk";
--> statement-breakpoint
ALTER TABLE "invoice_product_events" DROP CONSTRAINT "invoice_product_events_invoiceProductId_invoice_products_id_fk";
--> statement-breakpoint
ALTER TABLE "ncm_events" DROP CONSTRAINT "ncm_events_ncmId_ncms_id_fk";
--> statement-breakpoint
ALTER TABLE "product_events" DROP CONSTRAINT "product_events_productId_products_id_fk";
