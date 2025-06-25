CREATE TABLE "declaration_expenses" (
	"declaration_expense_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"declaration" uuid,
	"name" text NOT NULL,
	"use_icms_base" boolean DEFAULT false,
	"use_customs_base" boolean DEFAULT false,
	"allocation_method" varchar(12) NOT NULL,
	"currency" varchar(4) NOT NULL,
	"amount" integer DEFAULT 0,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "declaration_expenses_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_product_ncms" (
	"declaration_invoice_product_ncm_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product" uuid,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"code" integer NOT NULL,
	"tax" integer NOT NULL,
	"icms" integer NOT NULL,
	"pis" integer NOT NULL,
	"cofins" integer NOT NULL,
	"ipi" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "declaration_invoice_product_ncms_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "declaration_invoice_products" (
	"declaration_invoice_product_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"invoice" uuid,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"product_id" text NOT NULL,
	"name" text DEFAULT '',
	"tid" text DEFAULT '',
	"description" text DEFAULT '',
	"weight" integer NOT NULL,
	"length" integer NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"amount" integer NOT NULL,
	"quantity" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "declaration_invoice_products_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "declaration_invoices" (
	"declaration_invoice_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"declaration" uuid,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"quote" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "declaration_invoices_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "declarations" (
	"declaration_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"quote" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "declarations_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "expenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"use_icms_base" boolean DEFAULT false,
	"use_customs_base" boolean DEFAULT false,
	"allocation_method" varchar(12) NOT NULL,
	"currency" varchar(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoice_products" (
	"invoice_product_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid,
	"invoice_id" uuid,
	"amount" integer NOT NULL,
	"quantity" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "invoice_products_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "invoices" (
	"invoice_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"registration" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"quote" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "invoices_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "ncms" (
	"ncm_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"code" integer NOT NULL,
	"tax" integer NOT NULL,
	"icms" integer NOT NULL,
	"pis" integer NOT NULL,
	"cofins" integer NOT NULL,
	"ipi" integer NOT NULL,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "ncms_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"product_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text DEFAULT '',
	"tid" text DEFAULT '',
	"description" text DEFAULT '',
	"weight" integer NOT NULL,
	"length" integer NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"ncm_id" uuid,
	"event" varchar(10) DEFAULT 'CREATED',
	"enable" boolean DEFAULT false,
	"registered_at" timestamp DEFAULT now(),
	CONSTRAINT "products_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "declaration_expenses" ADD CONSTRAINT "declaration_expenses_declaration_declarations_id_fk" FOREIGN KEY ("declaration") REFERENCES "public"."declarations"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "declaration_invoice_product_ncms" ADD CONSTRAINT "declaration_invoice_product_ncms_product_declaration_invoice_products_id_fk" FOREIGN KEY ("product") REFERENCES "public"."declaration_invoice_products"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "declaration_invoice_products" ADD CONSTRAINT "declaration_invoice_products_invoice_declaration_invoices_id_fk" FOREIGN KEY ("invoice") REFERENCES "public"."declaration_invoices"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "declaration_invoices" ADD CONSTRAINT "declaration_invoices_declaration_declarations_id_fk" FOREIGN KEY ("declaration") REFERENCES "public"."declarations"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_invoice_id_invoices_id_fk" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_ncm_id_ncms_id_fk" FOREIGN KEY ("ncm_id") REFERENCES "public"."ncms"("id") ON DELETE set null ON UPDATE cascade;