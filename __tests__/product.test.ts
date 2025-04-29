import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { Product } from "@/core/domain/entities/product";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";
import { PrismaClient } from "../prisma";

test("calcute volume", () => {
  const product = Product.create({
    name: "Product 1",
    ncm: { code: 1, cofins: 1, icms: 1, ipi: 1, pis: 1, tax: 1 },
    weight: 1,
    length: 2.3,
    height: 4,
    width: 12,
  });
  expect(product.volume).toBe(110.4);
});

test("create product", async () => {
  const createProduct = CreateProduct.instance();
  const productRepository = ProductDatabaseRepository.instance();
  const ncmRepository = NCMDatabaseRepository.instance();
  const createNCM = CreateNCM.instance();
  const ncm = await createNCM.execute({
    code: 1,
    cofins: 1,
    icms: 1,
    ipi: 1,
    pis: 1,
    tax: 1,
  });
  const product = await createProduct.execute({
    name: "Produto 1",
    ncm: ncm.id,
    weight: 1,
    length: 12.32,
    height: 13.2,
    width: 11.74,
  });

  expect(product.volume).toBe(1909.2);
  expect(product.ncm.code).toBe(1);
  expect(product.ncm.cofins).toBe(1);
  expect(product.ncm.icms).toBe(1);
  expect(product.ncm.ipi).toBe(1);
  expect(product.ncm.pis).toBe(1);
  expect(product.ncm.tax).toBe(1);
  expect(product.ncm.tax).toBe(1);

  const currentlist = await productRepository.list();
  expect(currentlist.filter((p) => p.id === product.id).length).toBe(1);

  await productRepository.remove(product.id);
  await ncmRepository.remove(ncm.id);
  await new PrismaClient().productNCM.deleteMany({
    where: {
      product: {
        every: {
          id: product.id,
        },
      },
    },
  });
});
