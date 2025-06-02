/*
  Warnings:

  - You are about to drop the column `declarationId` on the `declaration_expenses` table. All the data in the column will be lost.
  - You are about to drop the column `declarationId` on the `declaration_invoices` table. All the data in the column will be lost.
  - Added the required column `declaration` to the `declaration_expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `declaration` to the `declaration_invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "declaration_expenses" DROP COLUMN "declarationId",
ADD COLUMN     "declaration" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "declaration_invoices" DROP COLUMN "declarationId",
ADD COLUMN     "declaration" TEXT NOT NULL;
