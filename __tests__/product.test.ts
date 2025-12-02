import { Product } from "@/core/domain/entities/product";

test("calcute volume", () => {
  const product = Product.create({
    name: "Product 1",
    ncm: {
      id: "1",
      code: 1,
      cofins: 1,
      icms: 1,
      ipi: 1,
      pis: 1,
      tax: 1,
    },
    description: "",
    tid: "",
    weight: 1,
    length: 2.3,
    height: 4,
    width: 12,
  });
  expect(product.volume).toBe(110.4);
});

test("create product (domain only)", () => {
  const product = Product.create({
    name: "Produto 1",
    ncm: {
      id: "1",
      code: 1,
      cofins: 1,
      icms: 1,
      ipi: 1,
      pis: 1,
      tax: 1,
    },
    description: "",
    tid: "",
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
});
