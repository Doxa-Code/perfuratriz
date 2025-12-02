import { describe, expect, it } from "vitest";
import {
  createSaleTableInputSchema,
  saleTableSchema,
  saleTableImportInfoOutputSchema,
} from "@/actions/sale-table-schema";

describe("createSaleTableInputSchema", () => {
  it("should transform string fields into correct types for create/update", () => {
    const input = {
      id: null,
      productId: "550e8400-e29b-41d4-a716-446655440000",
      lastImportationAt: "2025-02-10T00:00:00.000Z",
      lastImportationQuote: "4,1234",
      dollarQuote: "5,6789",
      dollarQuoteDate: "2025-02-11T00:00:00.000Z",
      costPriceUsd: "1.234,56",
      costPriceBrl: "12.345,67",
    };

    const parsed = createSaleTableInputSchema.parse(input);

    expect(parsed.id).toBeNull();
    expect(parsed.productId).toBe(input.productId);

    // datas transformadas em Date ou null
    expect(parsed.lastImportationAt).toBeInstanceOf(Date);
    expect(parsed.lastImportationAt?.toISOString()).toBe(input.lastImportationAt);
    expect(parsed.dollarQuoteDate).toBeInstanceOf(Date);
    expect(parsed.dollarQuoteDate?.toISOString()).toBe(input.dollarQuoteDate);

    // cotações transformadas em número com 4 casas
    expect(parsed.lastImportationQuote).toBeCloseTo(4.1234, 4);
    expect(parsed.dollarQuote).toBeCloseTo(5.6789, 4);

    // preços transformados em número com 2 casas
    expect(parsed.costPriceUsd).toBeCloseTo(1234.56, 2);
    expect(parsed.costPriceBrl).toBeCloseTo(12345.67, 2);
  });

  it("should accept nullable date and quote fields", () => {
    const input = {
      id: null,
      productId: "550e8400-e29b-41d4-a716-446655440000",
      lastImportationAt: null,
      lastImportationQuote: null,
      dollarQuote: "3,5000",
      dollarQuoteDate: null,
      costPriceUsd: "10,00",
      costPriceBrl: "50,00",
    };

    const parsed = createSaleTableInputSchema.parse(input);

    expect(parsed.lastImportationAt).toBeNull();
    expect(parsed.lastImportationQuote).toBeNull();
    expect(parsed.dollarQuoteDate).toBeNull();
    expect(parsed.dollarQuote).toBeCloseTo(3.5, 4);
  });
});

describe("saleTableSchema", () => {
  it("should preprocess date-like values into Date instances", () => {
    const now = new Date().toISOString();
    const data = {
      id: "1",
      productId: "550e8400-e29b-41d4-a716-446655440000",
      product: {
        id: "p1",
        tid: "T123",
        name: "Produto",
        description: "",
        ncm: {
          id: "n1",
          code: 1,
          cofins: 1,
          icms: 1,
          ipi: 1,
          pis: 1,
          tax: 1,
        },
        weight: 1,
        length: 1,
        height: 1,
        width: 1,
      },
      lastImportationAt: now,
      lastImportationQuote: 4.1234,
      dollarQuote: 5.6789,
      dollarQuoteDate: now,
      costPriceUsd: 10,
      costPriceBrl: 50,
      createdAt: now,
      updatedAt: now,
    };

    const parsed = saleTableSchema.parse(data);

    expect(parsed.lastImportationAt).toBeInstanceOf(Date);
    expect(parsed.dollarQuoteDate).toBeInstanceOf(Date);
    expect(parsed.createdAt).toBeInstanceOf(Date);
    expect(parsed.updatedAt).toBeInstanceOf(Date);
  });
});

describe("saleTableImportInfoOutputSchema", () => {
  it("should validate nullable import info payload", () => {
    const valid = {
      createdAt: "2025-02-10T00:00:00.000Z",
      quote: 4.1234,
    };

    expect(() => saleTableImportInfoOutputSchema.parse(valid)).not.toThrow();
    expect(saleTableImportInfoOutputSchema.parse(null)).toBeNull();
  });
});


