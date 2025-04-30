import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";

interface ExpenseRepository {
  save(expense: Expense): Promise<void>;
}

export class CreateExpense {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async execute(input: InputDTO) {
    const expense = Expense.create(input);
    await this.expenseRepository.save(expense);
    return expense;
  }

  static instance() {
    return new CreateExpense(ExpenseDatabaseRepository.instance());
  }
}

type InputDTO = {
  name: string;
  useICMSBase: boolean;
  useCustomsBase: boolean;
  allocationMethod: "NET_WEIGHT" | "NET_VALUE" | "PER_UNIT";
  currency: "USD" | "BRL";
};
