CREATE TABLE "perfuratriz"."costs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"value" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DROP TABLE "perfuratriz"."administrative_costs" CASCADE;