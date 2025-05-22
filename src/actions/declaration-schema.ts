import { z } from "zod";
import { ProductSchema } from "./product-schema";

export const createDeclarationInputSchema = z.object({
	id: z.string().nullable(),
	registration: z.string(),
	quote: z.number(),
	createdAt: z.date().optional(),
	invoiceId: z.string(),
	expenses: z.array(
		z.object({
			name: z.string(),
			useICMSBase: z.boolean(),
			useCustomsBase: z.boolean(),
			allocationMethod: z.enum(["NET_WEIGHT", "NET_VALUE", "PER_UNIT"]),
			currency: z.enum(["USD", "BRL"]),
			amount: z.number(),
		}),
	),
});

const InvoiceSchema = z.object({
	id: z.string(),
	registration: z.string(),
	createdAt: z.date(),
	quote: z.number(),
	products: z.array(
		z.object({
			product: ProductSchema,
			quantity: z.number(),
			amount: z.number(),
		}),
	),
});

const ExpenseSchema = z.object({
	id: z.string(),
	name: z.string(),
	useICMSBase: z.boolean(),
	useCustomsBase: z.boolean(),
	allocationMethod: z.enum(["NET_WEIGHT", "NET_VALUE", "PER_UNIT"]),
	currency: z.enum(["USD", "BRL"]),
});

export const DeclarationSchema = z.object({
	id: z.string(),
	registration: z.string(),
	quote: z.number(),
	createdAt: z.date(),
	invoice: InvoiceSchema,
	expenses: z.array(
		z.object({
			expense: ExpenseSchema,
			amount: z.number(),
		}),
	),
});

export const listDeclarationOutputSchema = z.array(DeclarationSchema);

export const removeDeclarationInputSchema = z.object({
	ids: z.array(z.string()),
});

export const retrieveDeclarationInputSchema = z.object({
	id: z.string(),
});

export const retrieveDeclarationOutputSchema = DeclarationSchema.nullable();
