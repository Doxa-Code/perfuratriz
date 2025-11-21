import { ProductSchema } from "@/actions/product-schema";
import { z } from "zod";

const decimalTransformer = (decimals = 2) =>
  z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório")
    .transform((value) => {
      const normalized = value.replace(/\./g, "").replace(",", ".");
      const parsed = Number.parseFloat(normalized);
      if (Number.isNaN(parsed)) {
        throw new Error("Valor inválido");
      }
      return Number(parsed.toFixed(decimals));
    });

export const createSaleTableInputSchema = z.object({
  id: z.string().nullable().optional(),
  productId: z.string({ required_error: "Campo obrigatório" }).uuid(),
  lastImportationAt: z
    .string()
    .nullable()
    .transform((value) => (value ? new Date(value) : null)),
  lastImportationQuote: z
    .string()
    .nullable()
    .transform((value) => {
      if (!value) return null;
      const normalized = value.replace(/\./g, "").replace(",", ".");
      const parsed = Number.parseFloat(normalized);
      if (Number.isNaN(parsed)) return null;
      return Number(parsed.toFixed(4));
    }),
  dollarQuote: decimalTransformer(4),
  dollarQuoteDate: z
    .string()
    .nullable()
    .transform((value) => (value ? new Date(value) : null)),
  costPriceUsd: decimalTransformer(),
  costPriceBrl: decimalTransformer(),
});

export const saleTableSchema = z.object({
  id: z.string(),
  productId: z.string(),
  product: ProductSchema,
  lastImportationAt: z.preprocess(
    (value) => (value ? new Date(value as string) : null),
    z.date().nullable()
  ),
  lastImportationQuote: z.number().nullable(),
  dollarQuote: z.number(),
  dollarQuoteDate: z.preprocess(
    (value) => (value ? new Date(value as string) : null),
    z.date().nullable()
  ),
  costPriceUsd: z.number(),
  costPriceBrl: z.number(),
  createdAt: z.preprocess((value) => new Date(value as string), z.date()),
  updatedAt: z.preprocess((value) => new Date(value as string), z.date()),
});

export const listSaleTableOutputSchema = z.array(saleTableSchema);

export const removeSaleTableInputSchema = z.object({
  ids: z.array(z.string().uuid()),
});

export const saleTableImportInfoInputSchema = z.object({
  productId: z.string().uuid(),
});

export const saleTableImportInfoOutputSchema = z
  .object({
    createdAt: z.string(),
    quote: z.number(),
  })
  .nullable();

