import { eq } from "drizzle-orm"
import { randomUUID } from "crypto"
import { db } from "../database" // ✅ usa uma conexão única
import { ncms, ncmEvents } from "../database/schemas"
import { NCM } from "@/core/domain/entities/ncm"
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"

export class NCMDatabaseRepository {
  private mapRowToEntity(row: typeof ncms.$inferSelect): NCM {
    return NCM.instance({
      id: row.id,
      code: row.code,
      icms: FormatFloatNumberHelper.format(row.icms),
      ipi: FormatFloatNumberHelper.format(row.ipi),
      pis: FormatFloatNumberHelper.format(row.pis),
      cofins: FormatFloatNumberHelper.format(row.cofins),
      pisSales: FormatFloatNumberHelper.format(row.pisSales),
      cofinsSales: FormatFloatNumberHelper.format(row.cofinsSales),
      tax: FormatFloatNumberHelper.format(row.tax),
      difal: row.difal,
      reductionCalculationBase: FormatFloatNumberHelper.format(row.reductionCalculationBase),
    })
  }

  async retrieve(id: string): Promise<NCM | null> {
    try {
      const [row] = await db.select().from(ncms).where(eq(ncms.id, id))
      return row ? this.mapRowToEntity(row) : null
    } catch (err) {
      console.error("❌ Error retrieving NCM:", err)
      throw new Error("Failed to retrieve NCM")
    }
  }

  async list(): Promise<NCM[]> {
    try {
      const rows = await db.select().from(ncms)
      return rows.map(this.mapRowToEntity)
    } catch (err) {
      console.error("❌ Error listing NCMs:", err)
      throw new Error("Failed to list NCMs")
    }
  }

  async save(ncm: NCM): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.insert(ncms).values({
          id: ncm.id,
          code: ncm.code,
          icms: FormatFloatNumberHelper.toPersist(ncm.icms),
          ipi: FormatFloatNumberHelper.toPersist(ncm.ipi),
          pis: FormatFloatNumberHelper.toPersist(ncm.pis),
          cofins: FormatFloatNumberHelper.toPersist(ncm.cofins),
          pisSales: FormatFloatNumberHelper.toPersist(ncm.pisSales),
          cofinsSales: FormatFloatNumberHelper.toPersist(ncm.cofinsSales),
          tax: FormatFloatNumberHelper.toPersist(ncm.tax),
          difal: ncm.difal,
          reductionCalculationBase: ncm.reductionCalculationBase,
        })

        await tx.insert(ncmEvents).values({
          id: randomUUID(),
          ncmId: ncm.id,
          type: "CREATED",
          payload: this.buildEventPayload(ncm),
        })
      })
    } catch (err) {
      console.error("❌ Error saving NCM:", err)
      throw new Error("Failed to save NCM")
    }
  }

  async update(ncm: NCM): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(ncms)
          .set({
            code: ncm.code,
            icms: FormatFloatNumberHelper.toPersist(ncm.icms),
            ipi: FormatFloatNumberHelper.toPersist(ncm.ipi),
            pis: FormatFloatNumberHelper.toPersist(ncm.pis),
            cofins: FormatFloatNumberHelper.toPersist(ncm.cofins),
            pisSales: FormatFloatNumberHelper.toPersist(ncm.pisSales),
            cofinsSales: FormatFloatNumberHelper.toPersist(ncm.cofinsSales),
            tax: FormatFloatNumberHelper.toPersist(ncm.tax),
            difal: ncm.difal,
            reductionCalculationBase: ncm.reductionCalculationBase,
          })
          .where(eq(ncms.id, ncm.id))

        await tx.insert(ncmEvents).values({
          id: randomUUID(),
          ncmId: ncm.id,
          type: "UPDATED",
          payload: this.buildEventPayload(ncm),
        })
      })
    } catch (err) {
      console.error("❌ Error updating NCM:", err)
      throw new Error("Failed to update NCM")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const existing = await this.retrieve(id)
      if (!existing) return

      await db.transaction(async (tx) => {
        await tx.delete(ncms).where(eq(ncms.id, id))

        await tx.insert(ncmEvents).values({
          id: randomUUID(),
          ncmId: id,
          type: "DELETED",
          payload: this.buildEventPayload(existing),
        })
      })
    } catch (err) {
      console.error("❌ Error removing NCM:", err)
      throw new Error("Failed to remove NCM")
    }
  }

  private buildEventPayload(ncm: NCM) {
    return {
      code: ncm.code,
      icms: ncm.icms,
      ipi: ncm.ipi,
      pis: ncm.pis,
      cofins: ncm.cofins,
      pisSales: ncm.pisSales,
      cofinsSales: ncm.cofinsSales,
      tax: ncm.tax,
      difal: ncm.difal,
      reductionCalculationBaseValue: ncm.reductionCalculationBase,
      reductionCalculationBase: ncm.reductionCalculationBase > 0,
    }
  }
  static instance() {
    return new NCMDatabaseRepository();
  }
}

export const ncmRepository = new NCMDatabaseRepository()
