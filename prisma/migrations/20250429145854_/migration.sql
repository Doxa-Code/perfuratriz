/*
  Warnings:

  - You are about to drop the column `productId` on the `product_ncm` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ncmId]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ncmId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_ncm" DROP CONSTRAINT "product_ncm_productId_fkey";

-- DropIndex
DROP INDEX "product_ncm_productId_key";

-- AlterTable
ALTER TABLE "product_ncm" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "ncmId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_ncmId_key" ON "products"("ncmId");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_fkey" FOREIGN KEY ("ncmId") REFERENCES "product_ncm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
