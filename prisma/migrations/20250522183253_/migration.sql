/*
  Warnings:

  - You are about to drop the column `ncmId` on the `ncms` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ncms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ncms" DROP COLUMN "ncmId",
DROP COLUMN "status";
