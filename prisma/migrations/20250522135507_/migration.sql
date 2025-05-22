/*
  Warnings:

  - You are about to drop the column `decription` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';
