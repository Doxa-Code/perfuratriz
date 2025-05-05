/*
  Warnings:

  - You are about to drop the column `productId` on the `invoice_products` table. All the data in the column will be lost.
  - You are about to drop the column `productVolume` on the `invoice_products` table. All the data in the column will be lost.
  - Added the required column `ncmCode` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncmCofins` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncmIcms` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncmIpi` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncmPis` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncmTax` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productHeight` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productLength` to the `invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productWidth` to the `invoice_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice_products" DROP COLUMN "productId",
DROP COLUMN "productVolume",
ADD COLUMN     "ncmCode" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ncmCofins" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ncmIcms" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ncmIpi" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ncmPis" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ncmTax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "productHeight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "productLength" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "productWidth" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "productName" SET DEFAULT '';
