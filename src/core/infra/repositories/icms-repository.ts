import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { ICMS } from "@/core/domain/entities/icms";
import { eq } from "drizzle-orm";
import { createDatabaseConnection } from "../database";
import { icmsState } from "../database/schemas";

interface ICMSRepository {
  list(): Promise<ICMS[]>;
  retrieve(id: string): Promise<ICMS | null>;
  upsert(input: ICMS): Promise<void>;
  remove(id: string): Promise<void>;
}

export class ICMSDatabaseRepository implements ICMSRepository {
  async retrieve(id: string) {
    const db = createDatabaseConnection();
    const [icms] = await db
      .select()
      .from(icmsState)
      .where(eq(icmsState.id, id));

    if (!icms) return null;

    return ICMS.instance(icms);
  }

  async list() {
    const db = createDatabaseConnection();
    const rows = await db.select().from(icmsState);

    return rows.map((icms) =>
      ICMS.instance({
        id: icms.id,
        icms: FormatFloatNumberHelper.format(icms.icms, 100),
        state: icms.state,
        stateLabel: icms.stateLabel,
      })
    );
  }

  async upsert(icms: ICMS): Promise<void> {
    const db = createDatabaseConnection();

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
          set: {
            icms: FormatFloatNumberHelper.toPersist(icms.icms, 100),
            state: icms.state,
            stateLabel: icms.stateLabel,
          },
          target: icmsState.id,
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
      await tx.delete(icmsState).where(eq(icmsState.id, id));
    });
  }

  static instance() {
    return new ICMSDatabaseRepository();
  }
}
