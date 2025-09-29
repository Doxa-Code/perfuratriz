import { eq } from "drizzle-orm";
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { NCM } from "@/core/domain/entities/ncm";
import { randomUUID } from "crypto";
import { createDatabaseConnection } from "../database";
import { ncmEvents, ncms } from "../database/schemas";

interface NCMRepository {
  save(ncm: NCM): Promise<void>;
  list(): Promise<NCM[]>;
  retrieve(id: string): Promise<NCM | null>;
  update(ncm: NCM): Promise<void>;
  remove(id: string): Promise<void>;
}

export class NCMDatabaseRepository implements NCMRepository {
  async retrieve(id: string) {
    const db = createDatabaseConnection();
    const [ncm] = await db.select().from(ncms).where(eq(ncms.id, id));

    if (!ncm) return null;

    return NCM.instance({
      id: ncm.id,
      code: ncm.code,
      icms: FormatFloatNumberHelper.format(ncm.icms),
      ipi: FormatFloatNumberHelper.format(ncm.ipi),
      pis: FormatFloatNumberHelper.format(ncm.pis),
      cofins: FormatFloatNumberHelper.format(ncm.cofins),
      pisSales: FormatFloatNumberHelper.format(ncm.pisSales),
      cofinsSales: FormatFloatNumberHelper.format(ncm.cofinsSales),
      tax: FormatFloatNumberHelper.format(ncm.tax),
      difal: ncm.difal,
      reductionCalculationBase: FormatFloatNumberHelper.format(
        ncm.reductionCalculationBase
      ),
    });
  }

  async list() {
    const db = createDatabaseConnection();
    const rows = await db.select().from(ncms);

    return rows.map((ncm) =>
      NCM.instance({
        id: ncm.id,
        code: ncm.code,
        cofins: FormatFloatNumberHelper.format(ncm.cofins),
        icms: FormatFloatNumberHelper.format(ncm.icms),
        ipi: FormatFloatNumberHelper.format(ncm.ipi),
        pis: FormatFloatNumberHelper.format(ncm.pis),
        pisSales: FormatFloatNumberHelper.format(ncm.pisSales),
        cofinsSales: FormatFloatNumberHelper.format(ncm.cofinsSales),
        tax: FormatFloatNumberHelper.format(ncm.tax),
        difal: ncm.difal,
        reductionCalculationBase: FormatFloatNumberHelper.format(
          ncm.reductionCalculationBase
        ),
      })
    );
  }

  async save(ncm: NCM): Promise<void> {
    const db = createDatabaseConnection();

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
      });

      await tx.insert(ncmEvents).values({
        id: randomUUID(),
        ncmId: ncm.id,
        type: "CREATED",
        payload: {
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
        },
      });
    });
  }

  async update(ncm: NCM): Promise<void> {
    const db = createDatabaseConnection();

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
        .where(eq(ncms.id, ncm.id));

      await tx.insert(ncmEvents).values({
        id: randomUUID(),
        ncmId: ncm.id,
        type: "UPDATED",
        payload: {
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
        },
      });
    });
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();
    const existing = await this.retrieve(id);
    if (!existing) {
      return;
    }

    await db.transaction(async (tx) => {
      await tx.delete(ncms).where(eq(ncms.id, id));

      await tx.insert(ncmEvents).values({
        id: randomUUID(),
        ncmId: id,
        type: "DELETED",
        payload: {
          code: existing.code,
          icms: existing.icms,
          ipi: existing.ipi,
          pis: existing.pis,
          cofins: existing.cofins,
          pisSales: existing.pisSales,
          cofinsSales: existing.cofinsSales,
          tax: existing.tax,
          difal: existing.difal,
          reductionCalculationBaseValue: existing.reductionCalculationBase,
          reductionCalculationBase: existing.reductionCalculationBase > 0,
        },
      });
    });
  }

  static instance() {
    return new NCMDatabaseRepository();
  }
}
