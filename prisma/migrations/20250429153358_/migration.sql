/*
  Warnings:

  - You are about to drop the column `productid` on the `product_ncm` table. All the data in the column will be lost.
  - Added the required column `ncmId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_ncm" DROP CONSTRAINT "product_ncm_productid_fkey";

-- AlterTable
ALTER TABLE "product_ncm" DROP COLUMN "productid";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "ncmId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_fkey" FOREIGN KEY ("ncmId") REFERENCES "product_ncm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
