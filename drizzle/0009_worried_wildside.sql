CREATE TABLE "perfuratriz"."administrative_costs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"value" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "perfuratriz"."icms_states" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"state" varchar(3) DEFAULT '' NOT NULL,
	"state_label" text DEFAULT '' NOT NULL,
	"icms" integer DEFAULT 0 NOT NULL
);
