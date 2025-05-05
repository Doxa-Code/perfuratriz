import { CreateDeclaration } from "@/core/application/usecases/create-declaration";
import { CreateExpense } from "@/core/application/usecases/create-expense";
import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";
import { PrismaClient } from "../prisma";

test("Declaration", () => {
  const declaration = Declaration.create({
    registration: "123",
    quote: 5.959,
    invoice: Invoice.create({
      quote: 5.999,
      registration: "123",
    }),
  });

  declaration.addExpense(
    ExpenseDeclaration.create({
      expense: Expense.create({
        allocationMethod: "NET_WEIGHT",
        currency: "USD",
        name: "Teste",
        useCustomsBase: true,
        useICMSBase: true,
      }),
      amount: 10,
    })
  );

  expect(declaration.expenses.length).toBe(1);
  // expect(declaration.expenses.at(0)?.expense.name).toBe("Seguro Internacional");
  // expect(declaration.expenses.at(0)?.expense.allocationMethod).toBe(
  //   "NET_VALUE"
  // );
  // expect(declaration.expenses.at(0)?.expense.currency).toBe("USD");
  // expect(declaration.expenses.at(0)?.expense.useCustomsBase).toBe(true);
  // expect(declaration.expenses.at(0)?.expense.useICMSBase).toBe(false);

  // expect(declaration.expenses.at(1)?.expense.name).toBe("Frete Internacional");
  // expect(declaration.expenses.at(1)?.expense.allocationMethod).toBe(
  //   "NET_WEIGHT"
  // );
  // expect(declaration.expenses.at(1)?.expense.currency).toBe("USD");
  // expect(declaration.expenses.at(1)?.expense.useCustomsBase).toBe(true);
  // expect(declaration.expenses.at(1)?.expense.useICMSBase).toBe(false);

  // expect(declaration.expenses.at(2)?.expense.name).toBe("Siscomex");
  // expect(declaration.expenses.at(2)?.expense.allocationMethod).toBe(
  //   "NET_VALUE"
  // );
  // expect(declaration.expenses.at(2)?.expense.currency).toBe("BRL");
  // expect(declaration.expenses.at(2)?.expense.useCustomsBase).toBe(false);
  // expect(declaration.expenses.at(2)?.expense.useICMSBase).toBe(true);
});

test("create declaration", async () => {
  const ncmRepository = NCMDatabaseRepository.instance();
  const productRepository = ProductDatabaseRepository.instance();
  const createNCM = CreateNCM.instance();
  const createProduct = CreateProduct.instance();
  const ncm = await createNCM.execute({
    code: 1,
    cofins: 1,
    icms: 1,
    ipi: 1,
    pis: 1,
    tax: 1,
  });
  const products = await Promise.all([
    createProduct.execute({
      height: 1,
      length: 1,
      name: "Product 1",
      ncm: ncm.id,
      weight: 1,
      width: 1,
    }),
    createProduct.execute({
      height: 2,
      length: 2,
      name: "Product 2",
      ncm: ncm.id,
      weight: 2,
      width: 2,
    }),
  ]);

  const createInvoice = CreateInvoice.instance();
  const invoiceRepository = InvoiceDatabaseRepository.instance();

  const invoice = await createInvoice.execute({
    registration: "PHTBR-000987",
    quote: 5.9995,
    products: products.map((p) => ({
      productId: p.id,
      quantity: 10,
      amount: 2,
    })),
  });

  const createExpense = CreateExpense.instance();
  const expenseRepository = ExpenseDatabaseRepository.instance();

  const expense1 = await createExpense.execute({
    name: "Teste",
    useICMSBase: true,
    useCustomsBase: false,
    allocationMethod: "NET_WEIGHT",
    currency: "USD",
  });
  const expense2 = await createExpense.execute({
    name: "Teste2",
    useICMSBase: true,
    useCustomsBase: false,
    allocationMethod: "NET_WEIGHT",
    currency: "BRL",
  });

  const createDeclaration = CreateDeclaration.instance();
  const declarationRepository = DeclarationDatabaseRepository.instance();

  const declaration = await createDeclaration.execute({
    registration: "123",
    quote: 5.959,
    invoiceId: invoice.id,
    expenses: [
      {
        id: expense1.id,
        amount: 10,
      },
      {
        id: expense2.id,
        amount: 20,
      },
    ],
  });

  const list = await declarationRepository.list();

  expect(list.map((i) => i.id).includes(declaration.id)).toBe(true);

  await declarationRepository.remove(declaration.id);
  await expenseRepository.remove(expense1.id);
  await expenseRepository.remove(expense2.id);
  await invoiceRepository.remove(invoice.id);
  await ncmRepository.remove(ncm.id);
  await Promise.all(products.map((p) => productRepository.remove(p.id)));
  await new PrismaClient().productNCM.deleteMany({
    where: {
      product: {
        every: {
          ncmId: ncm.id,
        },
      },
    },
  });
});
