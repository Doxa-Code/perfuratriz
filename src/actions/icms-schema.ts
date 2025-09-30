import { z } from "zod";

export const createICMSInputSchema = z.object({
  id: z.string().optional(),
  state: z.string(),
  icms: z
    .string()
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
});

export const ICMSSchema = z.object({
  id: z.string(),
  state: z.string(),
  stateLabel: z.string(),
  icms: z.number(),
});

export const listICMSOutputSchema = z.array(ICMSSchema);

export const removeICMSInputSchema = z.object({
  ids: z.array(z.string()),
});
