import { and, eq } from "drizzle-orm";
import { createDatabaseConnection } from "../database";
import { users } from "../database/schemas";
import { User } from "@/core/domain/entities/user";

export class UsersDatabaseRepository {
  async retrieveUserByEmail(email: string): Promise<User | null> {
    const db = createDatabaseConnection();

    const [user] = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
      })
      .from(users)
      .where(eq(users.email, email));

    if (!user) return null;

    return User.instance({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  async retrieve(id: string): Promise<User | null> {
    const db = createDatabaseConnection();

    const [user] = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
      })
      .from(users)
      .where(eq(users.id, id));

    if (!user) return null;

    return User.instance({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  async retrievePassword(userId: string) {
    const db = createDatabaseConnection();

    const [user] = await db
      .select({
        password: users.password,
      })
      .from(users)
      .where(eq(users.id, userId));

    if (!user) return null;

    return user.password;
  }

  async setPassword(userId: string, password: string) {
    const db = createDatabaseConnection();
    await db
      .update(users)
      .set({
        password,
      })
      .where(eq(users.id, userId));
  }

  async save(user: User) {
    const db = createDatabaseConnection();
    await db
      .insert(users)
      .values({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: user.email,
          name: user.name,
          role: user.role,
        },
      });
  }

  static instance() {
    return new UsersDatabaseRepository();
  }
}
