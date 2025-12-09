import { eq } from "drizzle-orm"
import { db } from "../database"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { Cost } from "@/core/domain/entities/cost"
import { costs } from "../database/schemas"

export class CostDatabaseRepository {
  private format(v: number | null) {
    // @ts-ignore
    return FormatFloatNumberHelper.format(v, 100)
  }

  async retrieve(id: string): Promise<Cost | null> {
    try {
      const [row] = await db.select().from(costs).where(eq(costs.id, id))

      if (!row) return null

      return Cost.instance({
        id: row.id,
        value: this.format(row.value),
        description: row.description,
      })
    } catch (err) {
      console.error("❌ Error retrieving Cost:", err)
      throw new Error("Failed to retrieve Cost")
    }
  }

  async list(): Promise<Cost[]> {
    try {
      const rows = await db.select().from(costs)

      return rows.map((row) =>
        Cost.instance({
          id: row.id,
          value: this.format(row.value),
          description: row.description,
        })
      )
    } catch (err) {
      console.error("❌ Error listing Costs:", err)
      throw new Error("Failed to list Costs")
    }
  }

  async upsert(cost: Cost): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .insert(costs)
          .values({
            id: cost.id,
            value: FormatFloatNumberHelper.toPersist(cost.value, 100),
            description: cost.description,
          })
          .onConflictDoUpdate({
            target: costs.id,
            set: {
              value: FormatFloatNumberHelper.toPersist(cost.value, 100),
              description: cost.description,
            },
          })
      })
    } catch (err) {
      console.error("❌ Error upserting Cost:", err)
      throw new Error("Failed to upsert Cost")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.delete(costs).where(eq(costs.id, id))
      })
    } catch (err) {
      console.error("❌ Error deleting Cost:", err)
      throw new Error("Failed to delete Cost")
    }
  }

  static instance() {
    return new CostDatabaseRepository()
  }
}

export const costRepository = new CostDatabaseRepository()
