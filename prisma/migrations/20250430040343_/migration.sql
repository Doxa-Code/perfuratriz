-- CreateEnum
CREATE TYPE "AllocationMethod" AS ENUM ('NET_WEIGHT', 'NET_VALUE', 'PER_UNIT');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'BRL');

-- CreateTable
CREATE TABLE "expenses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "useICMSBase" BOOLEAN NOT NULL DEFAULT false,
    "useCustomsBase" BOOLEAN NOT NULL DEFAULT false,
    "allocationMethod" "AllocationMethod" NOT NULL,
    "currency" "Currency" NOT NULL,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);
