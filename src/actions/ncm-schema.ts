import { z } from "zod";

export const createNCMInputSchema = z.object({
  id: z.string().nullable(),
  code: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
  tax: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
  icms: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
  pis: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
  cofins: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
  ipi: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
});

export const NCMSchema = z.object({
  id: z.string(),
  code: z.number(),
  tax: z.number(),
  icms: z.number(),
  pis: z.number(),
  cofins: z.number(),
  ipi: z.number(),
});

export const listNCMOutputSchema = z.array(NCMSchema);

export const removeNCMInputSchema = z.object({
  ids: z.array(z.string()),
});
