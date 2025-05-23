/*
  Warnings:

  - You are about to drop the `product_ncm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_ncmId_fkey";

-- DropTable
DROP TABLE "product_ncm";
