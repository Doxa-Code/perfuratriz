"use server";
import { db } from "@/core/database";
import { users } from "@/core/database/schemas";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createServerAction } from "zsa";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const authenticate = createServerAction()
  .input(
    z.object({
      email: z.string(),
      password: z.string(),
    })
  )
  .handler(async ({ input }) => {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, input.email));
    if (!user) throw new Error("Credenciais inválidas");

    const passIsCorrect = bcrypt.compareSync(input.password, user.password);
    if (!passIsCorrect) throw new Error("Credenciais inválidas");

    const token = jwt.sign({ id: user.id }, "shhh-perfuratriz");
    const cookieStore = await cookies();
    cookieStore.set("X-TOKEN-PERFURATRIZ", token);
    redirect("/ncms");
  });
