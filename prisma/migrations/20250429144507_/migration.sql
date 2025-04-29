-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quote" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productWeight" DOUBLE PRECISION NOT NULL,
    "productVolume" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "invoiceId" TEXT NOT NULL,

    CONSTRAINT "invoice_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
