import { z } from "zod";

export const createCostInputSchema = z.object({
  id: z.string().optional(),
  description: z.string(),
  value: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
});

export const CostSchema = z.object({
  id: z.string(),
  description: z.string(),
  value: z.number(),
});

export const listCostOutputSchema = z.array(CostSchema);

export const removeCostInputSchema = z.object({
  ids: z.array(z.string()),
});
