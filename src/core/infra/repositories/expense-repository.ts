import { eq } from "drizzle-orm"
import { db } from "../database"
import { Expense } from "@/core/domain/entities/expense"
import { expenses, expenseEvents } from "../database/schemas"

export class ExpenseDatabaseRepository {
  async retrieve(id: string): Promise<Expense | null> {
    try {
      const [row] = await db.select().from(expenses).where(eq(expenses.id, id))

      if (!row) return null

      return Expense.instance({
        id: row.id,
        name: row.name,
        allocationMethod: row.allocationMethod,
        currency: row.currency,
        useCustomsBase: row.useCustomsBase,
        useICMSBase: row.useICMSBase,
      })
    } catch (err) {
      console.error("❌ Error retrieving expense:", err)
      throw new Error("Failed to retrieve expense")
    }
  }

  async list(): Promise<Expense[]> {
    try {
      const rows = await db.select().from(expenses)
      return rows.map((row) =>
        Expense.instance({
          id: row.id,
          name: row.name,
          allocationMethod: row.allocationMethod,
          currency: row.currency,
          useCustomsBase: row.useCustomsBase,
          useICMSBase: row.useICMSBase,
        })
      )
    } catch (err) {
      console.error("❌ Error listing expenses:", err)
      throw new Error("Failed to list expenses")
    }
  }

  async save(expense: Expense): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.insert(expenses).values({
          id: expense.id,
          name: expense.name,
          allocationMethod: expense.allocationMethod,
          currency: expense.currency,
          useCustomsBase: expense.useCustomsBase,
          useICMSBase: expense.useICMSBase,
        })

        await tx.insert(expenseEvents).values({
          expenseId: expense.id,
          type: "CREATED",
          payload: expense,
        })
      })
    } catch (err) {
      console.error("❌ Error saving expense:", err)
      throw new Error("Failed to save expense")
    }
  }

  async update(expense: Expense): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(expenses)
          .set({
            name: expense.name,
            allocationMethod: expense.allocationMethod,
            currency: expense.currency,
            useCustomsBase: expense.useCustomsBase,
            useICMSBase: expense.useICMSBase,
          })
          .where(eq(expenses.id, expense.id))

        await tx.insert(expenseEvents).values({
          expenseId: expense.id,
          type: "UPDATED",
          payload: expense,
        })
      })
    } catch (err) {
      console.error("❌ Error updating expense:", err)
      throw new Error("Failed to update expense")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.delete(expenses).where(eq(expenses.id, id))
        await tx.insert(expenseEvents).values({
          expenseId: id,
          type: "DELETED",
          payload: { id },
        })
      })
    } catch (err) {
      console.error("❌ Error deleting expense:", err)
      throw new Error("Failed to delete expense")
    }
  }

  static instance() {
    return new ExpenseDatabaseRepository()
  }
}

export const expenseRepository = new ExpenseDatabaseRepository()
