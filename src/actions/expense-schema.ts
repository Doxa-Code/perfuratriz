import { z } from "zod";

export const createExpenseInputSchema = z.object({
  id: z.string().nullable(),
  name: z.string(),
  useICMSBase: z.boolean(),
  useCustomsBase: z.boolean(),
  allocationMethod: z.string(),
  currency: z.string(),
});

export const ExpenseSchema = z.object({
  id: z.string(),
  name: z.string(),
  useICMSBase: z.boolean(),
  useCustomsBase: z.boolean(),
  allocationMethod: z.enum(["NET_WEIGHT", "NET_VALUE", "PER_UNIT"]),
  currency: z.enum(["USD", "BRL"]),
});

export const listExpenseOutputSchema = z.array(ExpenseSchema);

export const removeExpenseInputSchema = z.object({
  ids: z.array(z.string()),
});
