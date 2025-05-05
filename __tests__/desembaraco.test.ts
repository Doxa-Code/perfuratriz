import { CreateDeclaration } from "@/core/application/usecases/create-declaration";
import { CreateExpense } from "@/core/application/usecases/create-expense";
import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import type { Declaration } from "@/core/domain/entities/declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";
import { truncCurrency } from "@/lib/utils";

test("desembaraco", async () => {
  const ncmRepository = NCMDatabaseRepository.instance();
  const productRepository = ProductDatabaseRepository.instance();
  const invoiceRepository = InvoiceDatabaseRepository.instance();

  const createNCM = CreateNCM.instance();
  const createProduct = CreateProduct.instance();

  const ncm1 = await createNCM.execute({
    code: 84314390,
    cofins: 9.65,
    icms: 0.18,
    ipi: 3.25,
    pis: 2.1,
    tax: 11.2,
  });

  const ncm2 = await createNCM.execute({
    code: 82071910,
    cofins: 65,
    icms: 0.88,
    ipi: 5.2,
    pis: 2.1,
    tax: 0,
  });

  const products = await Promise.all([
    createProduct.execute({
      name: "Pistão M60",
      height: 1,
      length: 1,
      width: 1,
      weight: 19.5,
      ncm: ncm1.id,
    }),
    createProduct.execute({
      name: "Bit 155 M60",
      height: 1,
      length: 1,
      width: 1,
      weight: 21,
      ncm: ncm2.id,
    }),
  ]);

  const createInvoice = CreateInvoice.instance();

  const invoice = await createInvoice.execute({
    registration: "TH-PHT231107",
    quote: 4.8889,
    products: [
      {
        productId: products[0].id,
        amount: 290,
        quantity: 200,
      },
      {
        productId: products[1].id,
        amount: 241,
        quantity: 500,
      },
    ],
  });

  expect(invoice.weight).toBe(14400);
  expect(invoice.amount).toBe(178500);

  const createExpense = CreateExpense.instance();
  const expenseRepository = ExpenseDatabaseRepository.instance();

  const expenses = await Promise.all([
    createExpense.execute({
      allocationMethod: "NET_VALUE",
      currency: "USD",
      name: "Seguro Internacional",
      useCustomsBase: true,
      useICMSBase: false,
    }),
    createExpense.execute({
      allocationMethod: "NET_WEIGHT",
      currency: "USD",
      name: "Frete Internacional",
      useCustomsBase: true,
      useICMSBase: false,
    }),
    createExpense.execute({
      allocationMethod: "NET_VALUE",
      currency: "BRL",
      name: "Siscomex",
      useCustomsBase: false,
      useICMSBase: true,
    }),
  ]);

  const createDeclaration = CreateDeclaration.instance();
  const declarationRepository = DeclarationDatabaseRepository.instance();

  const declaration = await createDeclaration.execute({
    registration: "24/0461899-6",
    quote: 4.9596,
    invoiceId: invoice.id,
    expenses: [
      {
        id: expenses[0].id,
        amount: 357.87,
      },
      {
        id: expenses[1].id,
        amount: 655.5,
      },
      {
        id: expenses[2].id,
        amount: 192.79,
      },
    ],
  });

  Clearance.create().execute({
    declaration,
  });
});

class Clearance {
  static create() {
    return new Clearance();
  }
  execute(input: InputDTO) {
    const invoice = input.declaration.invoice;
    const declaration = input.declaration;
    invoice.products.map((invoiceProduct) => {
      const freightCostAllocation =
        invoiceProduct.calculateFreightCostAllocation(
          invoice.weight,
          declaration.freightExpenseAmount
        );
      const insuranceCostAllocation =
        invoiceProduct.calculateInsuranceCostAllocation(
          invoice.amount,
          declaration.insuranceExpenseAmount
        );

      const siscomexCostAllocation =
        invoiceProduct.calculateSiscomexCostAllocation(
          invoice.amount,
          declaration.siscomexExpenseAmount
        );

      const aduaneiro =
        invoiceProduct.convert(declaration.quote) +
        freightCostAllocation +
        insuranceCostAllocation;

      const tax = truncCurrency(
        (invoiceProduct.product.ncm.tax * aduaneiro) / 100
      );

      const pis = truncCurrency(
        (invoiceProduct.product.ncm.pis * aduaneiro) / 100
      );

      const cofins = truncCurrency(
        (invoiceProduct.product.ncm.cofins * aduaneiro) / 100
      );

      const ipi = ((aduaneiro + tax) * invoiceProduct.product.ncm.ipi) / 100;

      const sumTax =
        aduaneiro + siscomexCostAllocation + tax + pis + cofins + ipi;
      const icmsDen = 1 - invoiceProduct.product.ncm.icms;

      const icms = (sumTax / icmsDen) * invoiceProduct.product.ncm.icms;

      const finalAmount = (aduaneiro + tax) / invoiceProduct.quantity;

      const fator = finalAmount / (invoiceProduct.amount * invoice.quote);

      console.log({
        tax,
        pis,
        cofins,
        ipi,
        icms,
        finalAmount,
        fator,
      });
    });
  }
}

type InputDTO = {
  declaration: Declaration;
};
