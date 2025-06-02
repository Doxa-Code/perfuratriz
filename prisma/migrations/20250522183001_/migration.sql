-- CreateEnum
CREATE TYPE "ESStatus" AS ENUM ('ACTIVE', 'DEPRECATED');

-- AlterTable
ALTER TABLE "ncms" ADD COLUMN     "ncmId" TEXT,
ADD COLUMN     "status" "ESStatus" NOT NULL DEFAULT 'DEPRECATED';
