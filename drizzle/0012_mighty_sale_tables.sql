CREATE TABLE "perfuratriz"."sale_tables" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"last_importation_at" timestamp,
	"last_importation_quote" integer,
	"dollar_quote" integer DEFAULT 0 NOT NULL,
	"dollar_quote_date" timestamp,
	"cost_price_usd" integer DEFAULT 0 NOT NULL,
	"cost_price_brl" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "perfuratriz"."sale_tables"
ADD CONSTRAINT "sale_tables_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "perfuratriz"."products"("id") ON DELETE restrict ON UPDATE no action;

