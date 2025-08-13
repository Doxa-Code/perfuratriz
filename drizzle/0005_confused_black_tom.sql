ALTER TABLE "declaration_expenses" DROP CONSTRAINT "declaration_expenses_declarationId_declarations_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncms" DROP CONSTRAINT "declaration_invoice_product_ncms_productId_declaration_invoice_products_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoice_products" DROP CONSTRAINT "declaration_invoice_products_invoiceId_declaration_invoices_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_invoices" DROP CONSTRAINT "declaration_invoices_declarationId_declarations_id_fk";
--> statement-breakpoint
ALTER TABLE "declaration_expenses" ADD CONSTRAINT "declaration_expenses_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "public"."declarations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncms" ADD CONSTRAINT "declaration_invoice_product_ncms_productId_declaration_invoice_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."declaration_invoice_products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_products" ADD CONSTRAINT "declaration_invoice_products_invoiceId_declaration_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."declaration_invoices"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoices" ADD CONSTRAINT "declaration_invoices_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "public"."declarations"("id") ON DELETE cascade ON UPDATE no action;