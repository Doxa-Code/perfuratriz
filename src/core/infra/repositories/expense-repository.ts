// expense-database-repository.ts
import { eq } from "drizzle-orm";
import { Expense } from "@/core/domain/entities/expense";
import { createDatabaseConnection } from "../database";
import { expenseEvents, expenses } from "../database/schemas";

interface ExpenseRepository {
  save(expense: Expense): Promise<void>;
  update(expense: Expense): Promise<void>;
  remove(id: string): Promise<void>;
  list(): Promise<Expense[]>;
  retrieve(id: string): Promise<Expense | null>;
}

export class ExpenseDatabaseRepository implements ExpenseRepository {
  async retrieve(id: string): Promise<Expense | null> {
    const db = createDatabaseConnection();

    const [row] = await db.select().from(expenses).where(eq(expenses.id, id));

    if (!row) return null;

    return Expense.instance({
      id: row.id,
      name: row.name,
      allocationMethod: row.allocationMethod,
      currency: row.currency,
      useCustomsBase: row.useCustomsBase,
      useICMSBase: row.useICMSBase,
    });
  }

  async list(): Promise<Expense[]> {
    const db = createDatabaseConnection();

    const rows = await db.select().from(expenses);

    return rows.map(Expense.instance);
  }

  async save(expense: Expense): Promise<void> {
    const db = createDatabaseConnection();

    await db.insert(expenses).values({
      id: expense.id,
      name: expense.name,
      allocationMethod: expense.allocationMethod,
      currency: expense.currency,
      useCustomsBase: expense.useCustomsBase,
      useICMSBase: expense.useICMSBase,
    });

    await db.insert(expenseEvents).values({
      expenseId: expense.id,
      type: "CREATED",
      payload: expense,
    });
  }

  async update(expense: Expense): Promise<void> {
    const db = createDatabaseConnection();

    await db
      .update(expenses)
      .set({
        name: expense.name,
        allocationMethod: expense.allocationMethod,
        currency: expense.currency,
        useCustomsBase: expense.useCustomsBase,
        useICMSBase: expense.useICMSBase,
      })
      .where(eq(expenses.id, expense.id));

    await db.insert(expenseEvents).values({
      expenseId: expense.id,
      type: "UPDATED",
      payload: expense,
    });
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();

    await db.delete(expenses).where(eq(expenses.id, id));

    await db.insert(expenseEvents).values({
      expenseId: id,
      type: "DELETED",
      payload: { id },
    });
  }

  static instance() {
    return new ExpenseDatabaseRepository();
  }
}
