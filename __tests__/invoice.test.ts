import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { Invoice } from "@/core/domain/entities/invoice";
import { Product } from "@/core/domain/entities/product";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";
import { PrismaClient } from "../prisma";

const products = [
  Product.create({
    name: "product 1",
    height: 1,
    length: 1,
    weight: 1,
    width: 1,
    ncm: {
      code: 1,
      cofins: 1,
      icms: 1,
      ipi: 1,
      pis: 1,
      tax: 1,
    },
  }),
  Product.create({
    name: "product 2",
    height: 2,
    length: 2,
    weight: 2,
    width: 2,
    ncm: {
      code: 2,
      cofins: 2,
      icms: 2,
      ipi: 2,
      pis: 2,
      tax: 2,
    },
  }),
];

test("invoice", () => {
  const invoice = Invoice.create({
    registration: "PHTBR-000987",
    createdAt: new Date(),
    quote: 5.9995,
  });

  expect(invoice.products.length).toBe(0);
  expect(invoice.quantity).toBe(0);
  expect(invoice.amount).toBe(0);
  expect(invoice.weight).toBe(0);
  expect(invoice.volume).toBe(0);

  products.map((product) => {
    invoice.add(
      InvoiceProduct.create({
        product,
        quantity: 10,
        amount: 2,
      })
    );
  });

  expect(invoice.products.length).toBe(2);
  expect(invoice.quantity).toBe(20);
  expect(invoice.amount).toBe(40);
  expect(invoice.weight).toBe(30);
  expect(invoice.volume).toBe(90);
});

test("create invoice", async () => {
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

  const list = await invoiceRepository.list();

  expect(list.map((i) => i.id)).toContain(invoice.id);

  expect(invoice.products.length).toBe(2);
  expect(invoice.quantity).toBe(20);
  expect(invoice.amount).toBe(40);
  expect(invoice.weight).toBe(30);
  expect(invoice.volume).toBe(90);

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
