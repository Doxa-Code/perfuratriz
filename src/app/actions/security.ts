"use server";

import { COOKIE_TOKEN_NAME } from "@/app/constants";
import { db } from "@/core/database";
import { users } from "@/core/database/schemas";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { createServerAction } from "zsa";

type Cookie = { name: string; value: string };

export const generateToken = async (userId: string): Promise<Cookie> => {
  const token = jwt.sign({ id: userId }, "shhh-perfuratriz");
  return {
    name: COOKIE_TOKEN_NAME,
    value: token,
  };
};

export async function checkPassword(password: string, encrypted: string) {
  return bcrypt.compareSync(password, encrypted);
}

export const getUserAuthenticate = createServerAction().handler(async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_TOKEN_NAME);

  if (!token?.value) return null;

  const decoded = jwt.decode(token.value) as { id: string };

  if (!decoded?.id) return null;

  const [user] = await db.select().from(users).where(eq(users.id, decoded.id));

  if (!user) return null;

  return user;
});
