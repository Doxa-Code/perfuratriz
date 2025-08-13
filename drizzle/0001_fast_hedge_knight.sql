ALTER TABLE "products" DROP CONSTRAINT "products_ncmId_ncms_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_ncms_id_fk" FOREIGN KEY ("ncmId") REFERENCES "public"."ncms"("id") ON DELETE set null ON UPDATE no action;