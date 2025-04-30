import { Expense } from "@/core/domain/entities/expense";
import { PrismaClient } from "../../../../prisma";

interface ExpenseRepository {
  save(expense: Expense): Promise<void>;
  list(): Promise<Expense[]>;
  retrieve(id: string): Promise<Expense | null>;
  remove(id: string): Promise<void>;
}

export class ExpenseDatabaseRepository implements ExpenseRepository {
  private database = new PrismaClient().expense;

  async retrieve(id: string): Promise<Expense | null> {
    const response = await this.database.findFirst({
      where: { id },
    });

    if (!response) return null;

    return Expense.instance({
      id: response.id,
      name: response.name,
      allocationMethod: response.allocationMethod,
      currency: response.currency,
      useCustomsBase: response.useCustomsBase,
      useICMSBase: response.useICMSBase,
    });
  }

  async list(): Promise<Expense[]> {
    const response = await this.database.findMany();
    return response.map(Expense.instance);
  }

  async remove(id: string): Promise<void> {
    await this.database.delete({
      where: { id },
    });
  }

  async save(expense: Expense): Promise<void> {
    await this.database.create({
      data: {
        id: expense.id,
        name: expense.name,
        allocationMethod: expense.allocationMethod,
        currency: expense.currency,
        useCustomsBase: expense.useCustomsBase,
        useICMSBase: expense.useICMSBase,
      },
    });
  }

  static instance() {
    return new ExpenseDatabaseRepository();
  }
}
