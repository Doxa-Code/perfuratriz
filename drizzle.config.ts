import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  out: path.resolve("./src/core/database/drizzle"),
  schema: path.resolve("./src/core/database/schemas.ts"),
  dialect: "postgresql",
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
