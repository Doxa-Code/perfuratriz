/*
  Warnings:

  - The primary key for the `ncms` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ncms" DROP CONSTRAINT "ncms_pkey",
ADD CONSTRAINT "ncms_pkey" PRIMARY KEY ("ncmId");
