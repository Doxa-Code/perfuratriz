"use server";
import { COOKIE_TOKEN_NAME } from "@/app/constants";
import { db } from "@/core/database";
import { users } from "@/core/database/schemas";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createServerAction } from "zsa";
import { checkPassword, generateToken } from "../security";
import { securityProcedure } from "../procedure";

export const authenticate = createServerAction()
  .input(
    z.object({
      email: z.string(),
      password: z.string(),
    })
  )
  .handler(async ({ input }) => {
    console.log(input);
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, input.email));
    if (!user) throw new Error("Credenciais inválidas");
    const passIsCorrect = checkPassword(input.password, user.password);
    if (!passIsCorrect) throw new Error("Credenciais inválidas");
    const cookieStore = await cookies();
    const cookie = await generateToken(user.id);
    cookieStore.set(cookie.name, cookie.value);
    redirect("/ncms");
  });

export const signOut = securityProcedure.handler(async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_TOKEN_NAME);
  redirect("/");
});
