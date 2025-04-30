-- CreateTable
CREATE TABLE "declarations" (
    "id" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "quote" DOUBLE PRECISION NOT NULL,
    "invoiceId" TEXT NOT NULL,

    CONSTRAINT "declarations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense_declarations" (
    "id" TEXT NOT NULL,
    "declarationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "useICMSBase" BOOLEAN NOT NULL DEFAULT false,
    "useCustomsBase" BOOLEAN NOT NULL DEFAULT false,
    "allocationMethod" "AllocationMethod" NOT NULL,
    "currency" "Currency" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "expense_declarations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "declarations_invoiceId_key" ON "declarations"("invoiceId");

-- CreateIndex
CREATE UNIQUE INDEX "expense_declarations_declarationId_key" ON "expense_declarations"("declarationId");

-- AddForeignKey
ALTER TABLE "declarations" ADD CONSTRAINT "declarations_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_declarations" ADD CONSTRAINT "expense_declarations_declarationId_fkey" FOREIGN KEY ("declarationId") REFERENCES "declarations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
