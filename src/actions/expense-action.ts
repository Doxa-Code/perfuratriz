"use server";
import { CreateExpense } from "@/core/application/usecases/create-expense";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createExpenseInputSchema,
  listExpenseOutputSchema,
  removeExpenseInputSchema,
} from "./expense-schema";

const expensesRepository = ExpenseDatabaseRepository.instance();

export const createExpenseAction = createServerAction()
  .input(createExpenseInputSchema)
  .handler(async ({ input }) => {
    if (!input.id) {
      const createExpense = CreateExpense.instance();
      await createExpense.execute({
        ...input,
        allocationMethod: input.allocationMethod as Expense.AllocationMethod,
        currency: input.currency as Expense.Currency,
      });
      revalidatePath("/expenses", "page");
      revalidatePath("/declarations", "page");
      return;
    }
    const expense = Expense.instance({
      ...input,
      allocationMethod: input.allocationMethod as Expense.AllocationMethod,
      currency: input.currency as Expense.Currency,
      id: input.id,
    });
    await expensesRepository.update(expense);
    revalidatePath("/expenses", "page");
    revalidatePath("/declarations", "page");
  });

export const listExpenseAction = createServerAction()
  .output(listExpenseOutputSchema)
  .handler(async () => {
    return await expensesRepository.list();
  });

export const removeExpenseAction = createServerAction()
  .input(removeExpenseInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => expensesRepository.remove(id)));
    revalidatePath("/expenses", "page");
    revalidatePath("/declarations", "page");
  });
