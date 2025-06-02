/*
  Warnings:

  - You are about to drop the column `products` on the `invoices` table. All the data in the column will be lost.
  - Added the required column `invoiceId` to the `invoice_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice_products" ADD COLUMN     "invoiceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "products";
