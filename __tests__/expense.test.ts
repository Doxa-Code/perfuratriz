import { Expense } from "@/core/domain/entities/expense";

test("create expense (domain only)", () => {
  const expense = Expense.create({
    name: "Frete Internacional",
    useICMSBase: true,
    useCustomsBase: false,
    allocationMethod: "NET_WEIGHT",
    currency: "USD",
  });

  expect(expense.name).toBe("Frete Internacional");
  expect(expense.useICMSBase).toBe(true);
  expect(expense.useCustomsBase).toBe(false);
  expect(expense.allocationMethod).toBe("NET_WEIGHT");
  expect(expense.currency).toBe("USD");
});
