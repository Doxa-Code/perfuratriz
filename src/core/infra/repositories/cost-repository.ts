import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Cost } from "@/core/domain/entities/cost";
import { eq } from "drizzle-orm";
import { createDatabaseConnection } from "../database";
import { costs } from "../database/schemas";

interface CostRepository {
  list(): Promise<Cost[]>;
  retrieve(id: string): Promise<Cost | null>;
  upsert(input: Cost): Promise<void>;
  remove(id: string): Promise<void>;
}

export class CostDatabaseRepository implements CostRepository {
  async retrieve(id: string) {
    const db = createDatabaseConnection();
    const [cost] = await db.select().from(costs).where(eq(costs.id, id));

    if (!cost) return null;

    return Cost.instance(cost);
  }

  async list() {
    const db = createDatabaseConnection();
    const rows = await db.select().from(costs);

    return rows.map((cost) =>
      Cost.instance({
        id: cost.id,
        value: FormatFloatNumberHelper.format(cost.value, 100),
        description: cost.description,
      })
    );
  }

  async upsert(cost: Cost): Promise<void> {
    const db = createDatabaseConnection();

    await db
      .insert(costs)
      .values({
        id: cost.id,
        value: FormatFloatNumberHelper.toPersist(cost.value, 100),
        description: cost.description,
      })
      .onConflictDoUpdate({
        set: {
          value: FormatFloatNumberHelper.toPersist(cost.value, 100),
          description: cost.description,
        },
        target: costs.id,
      });
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();
    const existing = await this.retrieve(id);
    if (!existing) {
      return;
    }

    await db.transaction(async (tx) => {
      await tx.delete(costs).where(eq(costs.id, id));
    });
  }

  static instance() {
    return new CostDatabaseRepository();
  }
}
