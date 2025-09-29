ALTER TABLE "perfuratriz"."ncms" ADD COLUMN "difal" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "perfuratriz"."ncms" ADD COLUMN "reduction_calculation_base" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "perfuratriz"."ncms" ADD COLUMN "reduction_calculation_base_value" integer DEFAULT 0 NOT NULL;