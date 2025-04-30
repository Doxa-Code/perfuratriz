import type { Expense } from "./expense";

type Props = {
  expense: Expense;
  amount: number;
};

export class ExpenseDeclaration {
  constructor(readonly expense: Expense, readonly amount: number) {}

  static create(props: Props) {
    return new ExpenseDeclaration(props.expense, props.amount);
  }
}
