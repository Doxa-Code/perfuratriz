"use server";
import { createServerAction } from "zsa";
import { authenticateInputSchema } from "./user-schema";
import { UsersDatabaseRepository } from "@/core/infra/repositories/users-repository";
import { NotAuthorized } from "@/core/domain/errors/not-authorized";
import { BcryptPasswordDriver } from "@/core/infra/drivers/password-driver";
import { JWTTokenDriver } from "@/core/infra/drivers/token-driver";
import { cookies } from "next/headers";
import { COOKIE_TOKEN_NAME } from "@/constants";
import { redirect, RedirectType } from "next/navigation";

const usersRepository = new UsersDatabaseRepository();
const passwordDriver = new BcryptPasswordDriver();
const tokenDriver = new JWTTokenDriver();

export const authenticate = createServerAction()
  .input(authenticateInputSchema)
  .handler(async ({ input }) => {
    const user = await usersRepository.retrieveUserByEmail(input.email);

    if (!user) throw new Error("Usuário ou senha incorreta!");

    const password = await usersRepository.retrievePassword(user.id);

    if (!password) throw new Error("Usuário ou senha incorreta!");

    const passIsCorrect = passwordDriver.compare(input.password, password);

    if (!passIsCorrect) throw new Error("Usuário ou senha incorreta!");

    const token = tokenDriver.create(user.id);

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_TOKEN_NAME, token);

    redirect(`/ncms`, RedirectType.replace);
  });
