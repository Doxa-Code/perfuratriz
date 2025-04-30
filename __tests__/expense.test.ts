import { CreateExpense } from "@/core/application/usecases/create-expense";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";

test("create expense", async () => {
  const createExpense = CreateExpense.instance();
  const expenseRepository = ExpenseDatabaseRepository.instance();

  const expense = await createExpense.execute({
    name: "Frete Internacional",
    useICMSBase: true,
    useCustomsBase: false,
    allocationMethod: "NET_WEIGHT",
    currency: "USD",
  });

  const currentList = await expenseRepository.list();

  expect(currentList.map((item) => item.id)).toContain(expense.id);
  expect(currentList.filter((item) => item.id === expense.id).length).toBe(1);

  await expenseRepository.remove(expense.id);
});
