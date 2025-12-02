import { NCM } from "@/core/domain/entities/ncm";

test("create ncm (domain only)", () => {
  const ncm = NCM.create({
    code: 1,
    tax: 1,
    icms: 1,
    pis: 1,
    cofins: 1,
    ipi: 1,
    pisSales: 1,
    cofinsSales: 1,
    difal: false,
    reductionCalculationBase: 0,
  });

  expect(ncm.code).toBe(1);
  expect(ncm.tax).toBe(1);
  expect(ncm.icms).toBe(1);
  expect(ncm.pis).toBe(1);
  expect(ncm.cofins).toBe(1);
  expect(ncm.ipi).toBe(1);
});
