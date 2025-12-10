import { eq } from "drizzle-orm"
import { db } from "../database" // ✅ usa instância única
import { users } from "../database/schemas"
import { User } from "@/core/domain/entities/user"

export class UsersDatabaseRepository {
  private async findBy(field: "id" | "email", value: string): Promise<User | null> {
    try {
      const [row] = await db
        .select({
          id: users.id,
          name: users.name,
          email: users.email,
          role: users.role,
        })
        .from(users)
        .where(eq(users[field], value))

      if (!row) return null

      return User.instance({
        id: row.id,
        name: row.name,
        email: row.email,
        role: row.role,
      })
    } catch (err) {
      console.error(`❌ Error finding user by ${field}:`, err)
      throw new Error("Failed to retrieve user")
    }
  }

  async retrieveUserByEmail(email: string): Promise<User | null> {
    return this.findBy("email", email)
  }

  async retrieve(id: string): Promise<User | null> {
    return this.findBy("id", id)
  }

  async retrievePassword(userId: string): Promise<string | null> {
    try {
      const [row] = await db
        .select({ password: users.password })
        .from(users)
        .where(eq(users.id, userId))

      return row?.password ?? null
    } catch (err) {
      console.error("❌ Error retrieving password:", err)
      throw new Error("Failed to retrieve password")
    }
  }

  async setPassword(userId: string, password: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(users)
          .set({ password })
          .where(eq(users.id, userId))
      })
    } catch (err) {
      console.error("❌ Error setting password:", err)
      throw new Error("Failed to set password")
    }
  }

  async save(user: User): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
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
          })
      })
    } catch (err) {
      console.error("❌ Error saving user:", err)
      throw new Error("Failed to save user")
    }
  }
  static instance() {
    return new UsersDatabaseRepository();
  }
}

export const usersRepository = new UsersDatabaseRepository()
