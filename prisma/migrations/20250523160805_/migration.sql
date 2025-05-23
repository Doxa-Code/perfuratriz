/*
  Warnings:

  - The primary key for the `declaration_expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `amount` on the `declaration_expenses` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The primary key for the `declaration_invoice_product_ncms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `declaration_invoice_product_ncms` table. All the data in the column will be lost.
  - You are about to alter the column `code` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `tax` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `icms` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `pis` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `cofins` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `ipi` on the `declaration_invoice_product_ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The primary key for the `declaration_invoice_products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `invoiceId` on the `declaration_invoice_products` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `declaration_invoice_products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `length` on the `declaration_invoice_products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `height` on the `declaration_invoice_products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `width` on the `declaration_invoice_products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The primary key for the `declaration_invoices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `quote` on the `declaration_invoices` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The primary key for the `declarations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `invoiceId` on the `declarations` table. All the data in the column will be lost.
  - The required column `declarationExpenseId` was added to the `declaration_expenses` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `declarationInvoiceProductNCMId` was added to the `declaration_invoice_product_ncms` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `product` to the `declaration_invoice_product_ncms` table without a default value. This is not possible if the table is not empty.
  - The required column `declarationInvoiceProductId` was added to the `declaration_invoice_products` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `invoice` to the `declaration_invoice_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `declarationId` to the `declaration_invoices` table without a default value. This is not possible if the table is not empty.
  - The required column `declarationInvoiceId` was added to the `declaration_invoices` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `declarationId` was added to the `declarations` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "declaration_expenses" DROP CONSTRAINT "declaration_expenses_declarationId_fkey";

-- DropForeignKey
ALTER TABLE "declaration_invoice_product_ncms" DROP CONSTRAINT "declaration_invoice_product_ncms_productId_fkey";

-- DropForeignKey
ALTER TABLE "declaration_invoice_products" DROP CONSTRAINT "declaration_invoice_products_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "declarations" DROP CONSTRAINT "declarations_invoiceId_fkey";

-- DropIndex
DROP INDEX "declarations_invoiceId_key";

-- AlterTable
ALTER TABLE "declaration_expenses" DROP CONSTRAINT "declaration_expenses_pkey",
ADD COLUMN     "declarationExpenseId" TEXT NOT NULL,
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "amount" SET DEFAULT 0,
ALTER COLUMN "amount" SET DATA TYPE INTEGER,
ADD CONSTRAINT "declaration_expenses_pkey" PRIMARY KEY ("declarationExpenseId");

-- AlterTable
ALTER TABLE "declaration_invoice_product_ncms" DROP CONSTRAINT "declaration_invoice_product_ncms_pkey",
DROP COLUMN "productId",
ADD COLUMN     "declarationInvoiceProductNCMId" TEXT NOT NULL,
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "product" TEXT NOT NULL,
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "code" SET DATA TYPE INTEGER,
ALTER COLUMN "tax" SET DATA TYPE INTEGER,
ALTER COLUMN "icms" SET DATA TYPE INTEGER,
ALTER COLUMN "pis" SET DATA TYPE INTEGER,
ALTER COLUMN "cofins" SET DATA TYPE INTEGER,
ALTER COLUMN "ipi" SET DATA TYPE INTEGER,
ADD CONSTRAINT "declaration_invoice_product_ncms_pkey" PRIMARY KEY ("declarationInvoiceProductNCMId");

-- AlterTable
ALTER TABLE "declaration_invoice_products" DROP CONSTRAINT "declaration_invoice_products_pkey",
DROP COLUMN "invoiceId",
ADD COLUMN     "declarationInvoiceProductId" TEXT NOT NULL,
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "invoice" TEXT NOT NULL,
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "weight" SET DATA TYPE INTEGER,
ALTER COLUMN "length" SET DATA TYPE INTEGER,
ALTER COLUMN "height" SET DATA TYPE INTEGER,
ALTER COLUMN "width" SET DATA TYPE INTEGER,
ADD CONSTRAINT "declaration_invoice_products_pkey" PRIMARY KEY ("declarationInvoiceProductId");

-- AlterTable
ALTER TABLE "declaration_invoices" DROP CONSTRAINT "declaration_invoices_pkey",
ADD COLUMN     "declarationId" TEXT NOT NULL,
ADD COLUMN     "declarationInvoiceId" TEXT NOT NULL,
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "quote" SET DATA TYPE INTEGER,
ADD CONSTRAINT "declaration_invoices_pkey" PRIMARY KEY ("declarationInvoiceId");

-- AlterTable
ALTER TABLE "declarations" DROP CONSTRAINT "declarations_pkey",
DROP COLUMN "invoiceId",
ADD COLUMN     "declarationId" TEXT NOT NULL,
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "event" "Events" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "declarations_pkey" PRIMARY KEY ("declarationId");
