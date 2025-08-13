import { createServerActionProcedure } from "zsa";
import { getUserAuthenticate } from "./security";

export const securityProcedure = createServerActionProcedure()
  .handler(async () => {
    const users = await getUserAuthenticate();
    if (!users) throw new Error("Not authenticate");

    return users;
  })
  .createServerAction();
