import { z } from "zod";

export const createProductInputSchema = z.object({
	id: z.string().nullable(),
	name: z.string(),
	ncm: z.string(),
	tid: z.string(),
	weight: z
		.string()
		.transform((value) => Number.parseFloat(value.replace(",", "."))),
	length: z
		.string()
		.transform((value) => Number.parseFloat(value.replace(",", "."))),
	height: z
		.string()
		.transform((value) => Number.parseFloat(value.replace(",", "."))),
	width: z
		.string()
		.transform((value) => Number.parseFloat(value.replace(",", "."))),
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
	tid: z.string(),
	weight: z.number(),
	length: z.number(),
	height: z.number(),
	width: z.number(),
});

export const listProductOutputSchema = z.array(ProductSchema);

export const removeProductInputSchema = z.object({
	ids: z.array(z.string()),
});
