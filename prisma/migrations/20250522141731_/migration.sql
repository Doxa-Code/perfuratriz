-- AlterTable
ALTER TABLE "invoice_products" ADD COLUMN     "productDescription" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "productTid" TEXT NOT NULL DEFAULT '';
