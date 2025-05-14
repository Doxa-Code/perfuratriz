import { Clearance } from "@/core/application/clearance";
import { CreateDeclaration } from "@/core/application/usecases/create-declaration";
import { CreateExpense } from "@/core/application/usecases/create-expense";
import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";

test(
  "clearance",
  async () => {
    const ncmRepository = NCMDatabaseRepository.instance();
    const productRepository = ProductDatabaseRepository.instance();
    const invoiceRepository = InvoiceDatabaseRepository.instance();

    const createNCM = CreateNCM.instance();
    const createProduct = CreateProduct.instance();

    const ncm1 = await createNCM.execute({
      code: 84314390,
      cofins: 9.65,
      icms: 18,
      ipi: 3.25,
      pis: 2.1,
      tax: 11.2,
    });

    const ncm2 = await createNCM.execute({
      code: 82071910,
      cofins: 9.65,
      icms: 8.8,
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
      createExpense.execute({
        allocationMethod: "PER_UNIT",
        currency: "BRL",
        name: "Despachante",
        useCustomsBase: false,
        useICMSBase: false,
      }),
      createExpense.execute({
        allocationMethod: "PER_UNIT",
        currency: "BRL",
        name: "SDA",
        useCustomsBase: false,
        useICMSBase: false,
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
          ...expenses[0],
          amount: 357.87,
        },
        {
          ...expenses[1],
          amount: 655.5,
        },
        {
          ...expenses[2],
          amount: 192.79,
        },
        {
          ...expenses[3],
          amount: 1000,
        },
        {
          ...expenses[4],
          amount: 300,
        },
      ],
    });

    const clearance = Clearance.create(declaration);

    const [result1, result2] = clearance.calculate();

    expect(result1.customsAmount).toBe(289113.9996122395);
    expect(result1.tax).toBe(32380.76795657082);
    expect(result1.icms).toBe(80336.38954797099);
    expect(result1.siscomexCostAllocation).toBe(62.64324929971989);
    expect(result1.freightCostAllocation).toBe(880.4839875);
    expect(result1.insuranceCostAllocation).toBe(576.7156247394958);
    expect(result1.expenseTotalAmount).toBe(371.42857142857144);
    expect(result1.finalAmount).toBe(1609.3309807011944);
    expect(result1.factor).toBe(1.1351054787031245);
    expect(result1.expenses.at(0)?.result).toBe(285.7142857142857);
    expect(result1.expenses.at(1)?.result).toBe(85.71428571428571);

    expect(result2.customsAmount).toBe(601200.5102397605);
    expect(result2.tax).toBe(0);
    expect(result2.icms).toBe(67855.92612488687);
    expect(result2.siscomexCostAllocation).toBe(130.1467507002801);
    expect(result2.freightCostAllocation).toBe(2370.5338125);
    expect(result2.insuranceCostAllocation).toBe(1198.1764272605042);
    expect(result2.expenseTotalAmount).toBe(928.5714285714287);
    expect(result2.finalAmount).toBe(1204.258163336664);
    expect(result2.factor).toBe(1.0220953260592813);
    expect(result2.expenses.at(0)?.result).toBe(714.2857142857143);
    expect(result2.expenses.at(1)?.result).toBe(214.28571428571428);

    await declarationRepository.remove(declaration.id);
    await expenseRepository.remove(expenses[0].id);
    await expenseRepository.remove(expenses[1].id);
    await expenseRepository.remove(expenses[2].id);
    await expenseRepository.remove(expenses[3].id);
    await expenseRepository.remove(expenses[4].id);
    await invoiceRepository.remove(invoice.id);
    await productRepository.remove(products[0].id);
    await productRepository.remove(products[1].id);
    await ncmRepository.remove(ncm1.id);
    await ncmRepository.remove(ncm2.id);
  },
  Number.POSITIVE_INFINITY
);
