/*
  Warnings:

  - You are about to drop the column `status` on the `ncms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ncms" DROP COLUMN "status",
ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
