-- CreateTable
CREATE TABLE "ncms" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "icms" INTEGER NOT NULL,
    "pis" INTEGER NOT NULL,
    "cofins" INTEGER NOT NULL,
    "ipi" INTEGER NOT NULL,

    CONSTRAINT "ncms_pkey" PRIMARY KEY ("id")
);
