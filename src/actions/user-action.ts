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

const usersRepository = UsersDatabaseRepository.instance();
const passwordDriver = BcryptPasswordDriver.instance();
const tokenDriver = JWTTokenDriver.instance();

export const authenticate = createServerAction()
  .input(authenticateInputSchema)
  .handler(async ({ input }) => {
    const user = await usersRepository.retrieveUserByEmail(input.email);

    if (!user) throw NotAuthorized.throw();

    const password = await usersRepository.retrievePassword(user.id);

    if (!password) throw NotAuthorized.throw();

    const passIsCorrect = passwordDriver.compare(input.password, password);

    if (!passIsCorrect) throw NotAuthorized.throw();

    const token = tokenDriver.create(user.id);

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_TOKEN_NAME, token);

    redirect(`/ncms`, RedirectType.replace);
  });
