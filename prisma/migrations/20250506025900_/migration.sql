/*
  Warnings:

  - A unique constraint covering the columns `[ncmId]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_ncmId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "products_ncmId_key" ON "products"("ncmId");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_fkey" FOREIGN KEY ("ncmId") REFERENCES "product_ncm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
