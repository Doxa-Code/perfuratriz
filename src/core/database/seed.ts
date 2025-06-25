import { count, eq } from "drizzle-orm";
import { db } from ".";
import { users } from "./schemas";
import bcrypt from "bcrypt";

const [userAlreadyExists] = await db
  .select({ count: count(users.id) })
  .from(users)
  .where(eq(users.email, "fernando.souza@doxacode.com.br"));

if (userAlreadyExists.count) process.exit(0);

await db.insert(users).values({
  email: "fernando.souza@doxacode.com.br",
  name: "Fernando Souza",
  password: bcrypt.hashSync("50271541", 10),
  id: crypto.randomUUID().toString(),
});

process.exit(0);
