import { eq } from "drizzle-orm"
import { db } from "../database"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { ICMS } from "@/core/domain/entities/icms"
import { icmsState } from "../database/schemas"

export class ICMSDatabaseRepository {
  private format(v: number | null) {
    // @ts-ignore
    return FormatFloatNumberHelper.format(v, 100)
  }

  async retrieve(id: string): Promise<ICMS | null> {
    try {
      const [row] = await db.select().from(icmsState).where(eq(icmsState.id, id))

      if (!row) return null

      return ICMS.instance({
        id: row.id,
        icms: this.format(row.icms),
        state: row.state,
        stateLabel: row.stateLabel,
      })
    } catch (err) {
      console.error("❌ Error retrieving ICMS:", err)
      throw new Error("Failed to retrieve ICMS")
    }
  }

  async list(): Promise<ICMS[]> {
    try {
      const rows = await db.select().from(icmsState)

      return rows.map((row) =>
        ICMS.instance({
          id: row.id,
          icms: this.format(row.icms),
          state: row.state,
          stateLabel: row.stateLabel,
        })
      )
    } catch (err) {
      console.error("❌ Error listing ICMS entries:", err)
      throw new Error("Failed to list ICMS entries")
    }
  }

  async upsert(icms: ICMS): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .insert(icmsState)
          .values({
            id: icms.id,
            icms: FormatFloatNumberHelper.toPersist(icms.icms, 100),
            state: icms.state,
            stateLabel: icms.stateLabel,
          })
          .onConflictDoUpdate({
            target: icmsState.id,
            set: {
              icms: FormatFloatNumberHelper.toPersist(icms.icms, 100),
              state: icms.state,
              stateLabel: icms.stateLabel,
            },
          })
      })
    } catch (err) {
      console.error("❌ Error upserting ICMS:", err)
      throw new Error("Failed to upsert ICMS")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.delete(icmsState).where(eq(icmsState.id, id))
      })
    } catch (err) {
      console.error("❌ Error deleting ICMS:", err)
      throw new Error("Failed to delete ICMS")
    }
  }

  static instance() {
    return new ICMSDatabaseRepository()
  }
}

export const icmsRepository = new ICMSDatabaseRepository()
