import { z } from "zod";
import { ProductSchema } from "./product-schema";

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
		}),
	),
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
		}),
	),
});

export const listInvoiceOutputSchema = z.array(InvoiceSchema);

export const removeInvoiceInputSchema = z.object({
	ids: z.array(z.string()),
});
