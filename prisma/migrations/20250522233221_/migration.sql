/*
  Warnings:

  - The primary key for the `invoices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status` on the `ncms` table. All the data in the column will be lost.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `expense_declarations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoice_products` table. If the table is not empty, all the data it contains will be lost.
  - The required column `invoiceId` was added to the `invoices` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `productId` was added to the `products` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "Events" AS ENUM ('CREATED', 'UPDATED', 'DELETED');

-- DropForeignKey
ALTER TABLE "declarations" DROP CONSTRAINT "declarations_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "expense_declarations" DROP CONSTRAINT "expense_declarations_declarationId_fkey";

-- DropForeignKey
ALTER TABLE "invoice_products" DROP CONSTRAINT "invoice_products_invoiceId_fkey";

-- AlterTable
ALTER TABLE "declarations" ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED';

-- AlterTable
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_pkey",
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "invoiceId" TEXT NOT NULL,
ADD COLUMN     "products" TEXT[],
ADD CONSTRAINT "invoices_pkey" PRIMARY KEY ("invoiceId");

-- AlterTable
ALTER TABLE "ncms" DROP COLUMN "status",
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED';

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "productId" TEXT NOT NULL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("productId");

-- DropTable
DROP TABLE "expense_declarations";

-- DropTable
DROP TABLE "invoice_products";

-- DropEnum
DROP TYPE "ESStatus";

-- CreateTable
CREATE TABLE "declaration_expenses" (
    "id" TEXT NOT NULL,
    "declarationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "useICMSBase" BOOLEAN NOT NULL DEFAULT false,
    "useCustomsBase" BOOLEAN NOT NULL DEFAULT false,
    "allocationMethod" "AllocationMethod" NOT NULL,
    "currency" "Currency" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "declaration_expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "declaration_invoices" (
    "id" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quote" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "declaration_invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "declaration_invoice_products" (
    "id" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "tid" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "weight" DOUBLE PRECISION NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "declaration_invoice_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "declaration_invoice_product_ncms" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "code" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "icms" DOUBLE PRECISION NOT NULL,
    "pis" DOUBLE PRECISION NOT NULL,
    "cofins" DOUBLE PRECISION NOT NULL,
    "ipi" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "declaration_invoice_product_ncms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "declarations" ADD CONSTRAINT "declarations_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "declaration_invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "declaration_expenses" ADD CONSTRAINT "declaration_expenses_declarationId_fkey" FOREIGN KEY ("declarationId") REFERENCES "declarations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "declaration_invoice_products" ADD CONSTRAINT "declaration_invoice_products_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "declaration_invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "declaration_invoice_product_ncms" ADD CONSTRAINT "declaration_invoice_product_ncms_productId_fkey" FOREIGN KEY ("productId") REFERENCES "declaration_invoice_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
