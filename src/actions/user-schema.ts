import z from "zod";

export const authenticateInputSchema = z.object({
  email: z.string(),
  password: z.string(),
});
