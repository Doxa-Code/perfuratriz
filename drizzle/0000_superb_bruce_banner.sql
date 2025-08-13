CREATE TABLE "declaration_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_expense_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationExpenseId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_expenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationId" uuid NOT NULL,
	"name" text NOT NULL,
	"useICMSBase" boolean DEFAULT false NOT NULL,
	"useCustomsBase" boolean DEFAULT false NOT NULL,
	"allocationMethod" varchar(11) NOT NULL,
	"currency" varchar(3) NOT NULL,
	"amount" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationInvoiceId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_product_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationInvoiceProductId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_product_ncm_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationInvoiceProductNcmId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_product_ncms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productId" uuid NOT NULL,
	"code" integer NOT NULL,
	"tax" integer NOT NULL,
	"icms" integer NOT NULL,
	"pis" integer NOT NULL,
	"cofins" integer NOT NULL,
	"ipi" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"invoiceId" uuid NOT NULL,
	"productId" uuid NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"tid" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"weight" integer NOT NULL,
	"length" integer NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"amount" integer NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declaration_invoices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationId" uuid NOT NULL,
	"registration" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"quote" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "declarations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"quote" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "expense_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"expenseId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "expenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"useICMSBase" boolean DEFAULT false NOT NULL,
	"useCustomsBase" boolean DEFAULT false NOT NULL,
	"allocationMethod" varchar(11) NOT NULL,
	"currency" varchar(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoice_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"invoiceId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoice_product_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"invoiceProductId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoice_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productId" uuid NOT NULL,
	"invoiceId" uuid NOT NULL,
	"amount" integer NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"quote" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ncm_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ncmId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ncms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" integer NOT NULL,
	"tax" integer NOT NULL,
	"icms" integer NOT NULL,
	"pis" integer NOT NULL,
	"cofins" integer NOT NULL,
	"ipi" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"tid" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"weight" integer NOT NULL,
	"length" integer NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"ncmId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "declaration_events" ADD CONSTRAINT "declaration_events_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "public"."declarations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_expense_events" ADD CONSTRAINT "declaration_expense_events_declarationExpenseId_declaration_expenses_id_fk" FOREIGN KEY ("declarationExpenseId") REFERENCES "public"."declaration_expenses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_expenses" ADD CONSTRAINT "declaration_expenses_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "public"."declarations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_events" ADD CONSTRAINT "declaration_invoice_events_declarationInvoiceId_declaration_invoices_id_fk" FOREIGN KEY ("declarationInvoiceId") REFERENCES "public"."declaration_invoices"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_events" ADD CONSTRAINT "declaration_invoice_product_events_declarationInvoiceProductId_declaration_invoice_products_id_fk" FOREIGN KEY ("declarationInvoiceProductId") REFERENCES "public"."declaration_invoice_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncm_events" ADD CONSTRAINT "declaration_invoice_product_ncm_events_declarationInvoiceProductNcmId_declaration_invoice_product_ncms_id_fk" FOREIGN KEY ("declarationInvoiceProductNcmId") REFERENCES "public"."declaration_invoice_product_ncms"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncms" ADD CONSTRAINT "declaration_invoice_product_ncms_productId_declaration_invoice_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."declaration_invoice_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoice_products" ADD CONSTRAINT "declaration_invoice_products_invoiceId_declaration_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."declaration_invoices"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "declaration_invoices" ADD CONSTRAINT "declaration_invoices_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "public"."declarations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expense_events" ADD CONSTRAINT "expense_events_expenseId_expenses_id_fk" FOREIGN KEY ("expenseId") REFERENCES "public"."expenses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_events" ADD CONSTRAINT "invoice_events_invoiceId_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."invoices"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_product_events" ADD CONSTRAINT "invoice_product_events_invoiceProductId_invoice_products_id_fk" FOREIGN KEY ("invoiceProductId") REFERENCES "public"."invoice_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_invoiceId_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "public"."invoices"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ncm_events" ADD CONSTRAINT "ncm_events_ncmId_ncms_id_fk" FOREIGN KEY ("ncmId") REFERENCES "public"."ncms"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_events" ADD CONSTRAINT "product_events_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_ncms_id_fk" FOREIGN KEY ("ncmId") REFERENCES "public"."ncms"("id") ON DELETE no action ON UPDATE no action;