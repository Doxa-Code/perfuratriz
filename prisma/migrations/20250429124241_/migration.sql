-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "ncmId" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_ncm" (
    "id" TEXT NOT NULL,
    "code" DOUBLE PRECISION NOT NULL,
    "cofins" DOUBLE PRECISION NOT NULL,
    "icms" DOUBLE PRECISION NOT NULL,
    "ipi" DOUBLE PRECISION NOT NULL,
    "pis" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_ncm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ncmId_fkey" FOREIGN KEY ("ncmId") REFERENCES "product_ncm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
