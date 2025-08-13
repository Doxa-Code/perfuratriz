ALTER TABLE "invoice_products" DROP CONSTRAINT "invoice_products_productId_products_id_fk";
--> statement-breakpoint
ALTER TABLE "invoice_products" DROP CONSTRAINT "invoice_products_invoiceId_invoices_id_fk";
--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_invoiceId_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."invoices"("id") ON DELETE cascade ON UPDATE no action;