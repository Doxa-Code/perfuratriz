import { Expense } from "./expense";
import { ExpenseDeclaration } from "./expense-declaration";
import type { Invoice } from "./invoice";

export namespace Declaration {
  export interface Props {
    id: string;
    registration: string;
    quote: number;
    invoice: Invoice;
    expenses: ExpenseDeclaration[];
  }
  export interface CreateProps {
    registration: string;
    quote: number;
    invoice: Invoice;
  }
}

export class Declaration {
  public id: string;
  public registration: string;
  public quote: number;
  public invoice: Invoice;
  public expenses: ExpenseDeclaration[];

  constructor(props: Declaration.Props) {
    this.id = props.id;
    this.registration = props.registration;
    this.quote = props.quote;
    this.invoice = props.invoice;
    this.expenses = props.expenses;
  }

  private get freightExpense() {
    const expense = this.expenses.find(
      (e) => e.expense.name === "Frete Internacional"
    );

    if (!expense)
      return ExpenseDeclaration.create({
        amount: 0,
        expense: Expense.create({
          allocationMethod: "NET_WEIGHT",
          currency: "USD",
          name: "Frete Internacional",
          useCustomsBase: true,
          useICMSBase: false,
        }),
      });

    return expense;
  }

  private get insuranceExpense() {
    const expense = this.expenses.find(
      (e) => e.expense.name === "Seguro Internacional"
    );

    if (!expense)
      return ExpenseDeclaration.create({
        amount: 0,
        expense: Expense.create({
          allocationMethod: "NET_VALUE",
          currency: "USD",
          name: "Seguro Internacional",
          useCustomsBase: true,
          useICMSBase: false,
        }),
      });

    return expense;
  }

  private get siscomexExpense() {
    const expense = this.expenses.find((e) => e.expense.name === "Siscomex");

    if (!expense)
      return ExpenseDeclaration.create({
        amount: 0,
        expense: Expense.create({
          allocationMethod: "NET_VALUE",
          currency: "BRL",
          name: "Siscomex",
          useCustomsBase: false,
          useICMSBase: true,
        }),
      });

    return expense;
  }

  get freightExpenseAmount() {
    return Math.round(this.freightExpense.amount * this.quote * 100) / 100;
  }

  get insuranceExpenseAmount() {
    return Math.round(this.insuranceExpense.amount * this.quote * 100) / 100;
  }

  get siscomexExpenseAmount() {
    return this.siscomexExpense.amount;
  }

  addExpense(expense: ExpenseDeclaration) {
    this.expenses.push(expense);
  }

  static instance(props: Declaration.Props) {
    return new Declaration(props);
  }

  static create(props: Declaration.CreateProps) {
    return new Declaration({
      id: crypto.randomUUID().toString(),
      expenses: [],
      invoice: props.invoice,
      quote: props.quote,
      registration: props.registration,
    });
  }
}
