/*
  Warnings:

  - You are about to drop the column `ncmId` on the `products` table. All the data in the column will be lost.
  - Added the required column `productid` to the `product_ncm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_ncmId_fkey";

-- DropIndex
DROP INDEX "products_ncmId_key";

-- AlterTable
ALTER TABLE "product_ncm" ADD COLUMN     "productid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "ncmId";

-- AddForeignKey
ALTER TABLE "product_ncm" ADD CONSTRAINT "product_ncm_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
