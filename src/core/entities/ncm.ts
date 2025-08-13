import { z } from "zod";

export const NCM = z.object({
  id: z.string(),
  code: z.number(),
  tax: z.number(),
  icms: z.number(),
  pis: z.number(),
  cofins: z.number(),
  ipi: z.number(),
});

export type NCM = z.infer<typeof NCM>;
