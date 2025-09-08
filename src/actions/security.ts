"use server";
import { cookies } from "next/headers";
import { createServerAction } from "zsa";
import { COOKIE_TOKEN_NAME } from "../constants";
import { BcryptPasswordDriver } from "@/core/infra/drivers/password-driver";
import { JWTTokenDriver } from "@/core/infra/drivers/token-driver";
import { UsersDatabaseRepository } from "@/core/infra/repositories/users-repository";
import { redirect } from "next/navigation";

export const signOut = createServerAction().handler(async () => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_TOKEN_NAME);
  redirect("/");
});

export async function checkPassword(password: string, encrypted: string) {
  return BcryptPasswordDriver.instance().compare(password, encrypted);
}

export async function getUserAuthenticateId() {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_TOKEN_NAME);

  if (!token?.value) return null;

  const userId = JWTTokenDriver.instance().decode(token.value);

  if (!userId) return null;

  return userId;
}

export const getUserAuthenticate = createServerAction().handler(async () => {
  const usersRepository = UsersDatabaseRepository.instance();
  const userId = await getUserAuthenticateId();
  if (!userId) return null;

  const user = await usersRepository.retrieve(userId);

  if (!user) return null;

  return user;
});
