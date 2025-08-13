CREATE TABLE "perfuratriz"."declaration_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."declaration_expenses" (
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
CREATE TABLE "perfuratriz"."declaration_invoice_product_ncms" (
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
CREATE TABLE "perfuratriz"."declaration_invoice_products" (
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
CREATE TABLE "perfuratriz"."declaration_invoices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declarationId" uuid NOT NULL,
	"registration" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"quote" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."declarations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"quote" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."expense_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"expenseId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."expenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"useICMSBase" boolean DEFAULT false NOT NULL,
	"useCustomsBase" boolean DEFAULT false NOT NULL,
	"allocationMethod" varchar(11) NOT NULL,
	"currency" varchar(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."invoice_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"invoiceId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."invoice_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productId" uuid NOT NULL,
	"invoiceId" uuid NOT NULL,
	"amount" integer NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."invoices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"quote" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."ncm_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ncmId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."ncms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" integer NOT NULL,
	"tax" integer NOT NULL,
	"icms" integer NOT NULL,
	"pis" integer NOT NULL,
	"cofins" integer NOT NULL,
	"ipi" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."product_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productId" uuid NOT NULL,
	"type" varchar(8) NOT NULL,
	"payload" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."products" (
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
ALTER TABLE "perfuratriz"."declaration_expenses" ADD CONSTRAINT "declaration_expenses_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "perfuratriz"."declarations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."declaration_invoice_product_ncms" ADD CONSTRAINT "declaration_invoice_product_ncms_productId_declaration_invoice_products_id_fk" FOREIGN KEY ("productId") REFERENCES "perfuratriz"."declaration_invoice_products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."declaration_invoice_products" ADD CONSTRAINT "declaration_invoice_products_invoiceId_declaration_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "perfuratriz"."declaration_invoices"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."declaration_invoices" ADD CONSTRAINT "declaration_invoices_declarationId_declarations_id_fk" FOREIGN KEY ("declarationId") REFERENCES "perfuratriz"."declarations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."invoice_products" ADD CONSTRAINT "invoice_products_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "perfuratriz"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."invoice_products" ADD CONSTRAINT "invoice_products_invoiceId_invoices_id_fk" FOREIGN KEY ("invoiceId") REFERENCES "perfuratriz"."invoices"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "perfuratriz"."products" ADD CONSTRAINT "products_ncmId_ncms_id_fk" FOREIGN KEY ("ncmId") REFERENCES "perfuratriz"."ncms"("id") ON DELETE set null ON UPDATE no action;