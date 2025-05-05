/*
  Warnings:

  - Added the required column `productId` to the `invoice_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice_products" ADD COLUMN     "productId" TEXT NOT NULL;
