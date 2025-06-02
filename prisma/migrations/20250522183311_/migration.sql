/*
  Warnings:

  - The required column `ncmId` was added to the `ncms` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ncms" ADD COLUMN     "ncmId" TEXT NOT NULL,
ADD COLUMN     "status" "ESStatus" NOT NULL DEFAULT 'DEPRECATED';
