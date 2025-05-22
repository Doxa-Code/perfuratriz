/*
  Warnings:

  - You are about to drop the column `dateCreated` on the `declarations` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreated` on the `invoices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "declarations" DROP COLUMN "dateCreated";

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "dateCreated";
