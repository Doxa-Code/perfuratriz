/*
  Warnings:

  - Added the required column `amount` to the `declaration_invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `declaration_invoice_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "declaration_invoice_products" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
