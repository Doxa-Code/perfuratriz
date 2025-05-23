/*
  Warnings:

  - You are about to alter the column `quote` on the `declarations` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "declarations" ALTER COLUMN "quote" SET DATA TYPE INTEGER;
