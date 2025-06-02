/*
  Warnings:

  - You are about to alter the column `code` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `tax` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `icms` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `pis` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `cofins` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `ipi` on the `ncms` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "ncms" ALTER COLUMN "code" SET DATA TYPE INTEGER,
ALTER COLUMN "tax" SET DATA TYPE INTEGER,
ALTER COLUMN "icms" SET DATA TYPE INTEGER,
ALTER COLUMN "pis" SET DATA TYPE INTEGER,
ALTER COLUMN "cofins" SET DATA TYPE INTEGER,
ALTER COLUMN "ipi" SET DATA TYPE INTEGER;
