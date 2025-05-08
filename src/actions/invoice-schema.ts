import { z } from "zod";

export const createInvoiceInputSchema = z.object({
  id: z.string().nullable(),
  registration: z.string(),
  quote: z.number(),
  createdAt: z.date().optional(),
  products: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number(),
      amount: z.number(),
    })
  ),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  ncm: z.object({
    id: z.string(),
    code: z.number(),
    cofins: z.number(),
    icms: z.number(),
    ipi: z.number(),
    pis: z.number(),
    tax: z.number(),
  }),
  weight: z.number(),
  length: z.number(),
  height: z.number(),
  width: z.number(),
});

export const InvoiceSchema = z.object({
  id: z.string(),
  registration: z.string(),
  createdAt: z.date(),
  quote: z.number(),
  isVinculated: z.boolean(),
  products: z.array(
    z.object({
      product: ProductSchema,
      quantity: z.number(),
      amount: z.number(),
    })
  ),
});

export const listInvoiceOutputSchema = z.array(InvoiceSchema);

export const removeInvoiceInputSchema = z.object({
  ids: z.array(z.string()),
});
