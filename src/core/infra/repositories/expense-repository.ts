import { Expense } from "@/core/domain/entities/expense";
import { PrismaClient } from "../../../../prisma";

interface ExpenseRepository {
  save(expense: Expense): Promise<void>;
  list(): Promise<Expense[]>;
  retrieve(id: string): Promise<Expense | null>;
  remove(id: string): Promise<void>;
}

export class ExpenseDatabaseRepository implements ExpenseRepository {
  private database = new PrismaClient();

  async retrieve(id: string): Promise<Expense | null> {
    await this.database.$connect();
    const response = await this.database.expense.findFirst({
      where: { id },
    });
    await this.database.$disconnect();

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
    await this.database.$connect();
    const response = await this.database.expense.findMany();
    await this.database.$disconnect();
    return response.map(Expense.instance);
  }

  async remove(id: string): Promise<void> {
    await this.database.$connect();
    await this.database.expense.delete({
      where: { id },
    });
    await this.database.$disconnect();
  }

  async save(expense: Expense): Promise<void> {
    await this.database.$connect();
    await this.database.expense.create({
      data: {
        id: expense.id,
        name: expense.name,
        allocationMethod: expense.allocationMethod,
        currency: expense.currency,
        useCustomsBase: expense.useCustomsBase,
        useICMSBase: expense.useICMSBase,
      },
    });
    await this.database.$disconnect();
  }

  async update(expense: Expense): Promise<void> {
    await this.database.$connect();
    await this.database.expense.update({
      data: {
        id: expense.id,
        name: expense.name,
        allocationMethod: expense.allocationMethod,
        currency: expense.currency,
        useCustomsBase: expense.useCustomsBase,
        useICMSBase: expense.useICMSBase,
      },
      where: {
        id: expense.id,
      },
    });
    await this.database.$disconnect();
  }

  static instance() {
    return new ExpenseDatabaseRepository();
  }
}
