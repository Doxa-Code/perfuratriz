/*
  Warnings:

  - You are about to drop the column `enable` on the `declarations` table. All the data in the column will be lost.
  - You are about to drop the column `event` on the `declarations` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `declarations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "declarations" DROP COLUMN "enable",
DROP COLUMN "event",
DROP COLUMN "registeredAt";
