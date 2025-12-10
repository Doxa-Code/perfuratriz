import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const globalForDb = global as unknown as { db?: ReturnType<typeof drizzle> }

export const db =
  globalForDb.db ??
  drizzle(
    new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10, // limite de conexões simultâneas
      idleTimeoutMillis: 30000,
    })
  )

if (process.env.NODE_ENV !== "production") globalForDb.db = db