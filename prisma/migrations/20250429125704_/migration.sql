/*
  Warnings:

  - You are about to drop the column `ncmId` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `product_ncm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `product_ncm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_ncmId_fkey";

-- AlterTable
ALTER TABLE "product_ncm" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "ncmId";

-- CreateIndex
CREATE UNIQUE INDEX "product_ncm_productId_key" ON "product_ncm"("productId");

-- AddForeignKey
ALTER TABLE "product_ncm" ADD CONSTRAINT "product_ncm_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
