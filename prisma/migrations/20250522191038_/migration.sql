/*
  Warnings:

  - The primary key for the `ncms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `registeredAt` on the `ncms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ncms" DROP CONSTRAINT "ncms_pkey",
DROP COLUMN "registeredAt",
ADD COLUMN     "status" "ESStatus" NOT NULL DEFAULT 'DEPRECATED',
ADD CONSTRAINT "ncms_pkey" PRIMARY KEY ("ncmId");
