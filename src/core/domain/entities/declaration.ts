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

  addExpense(expense: ExpenseDeclaration) {
    this.expenses.push(expense);
  }

  static instance(props: Declaration.Props) {
    return new Declaration(props);
  }

  static create(props: Declaration.CreateProps) {
    return new Declaration({
      id: crypto.randomUUID().toString(),
      expenses: [
        ExpenseDeclaration.create({
          expense: Expense.create({
            allocationMethod: "NET_VALUE",
            currency: "USD",
            name: "Seguro Internacional",
            useCustomsBase: true,
            useICMSBase: false,
          }),
          amount: 0,
        }),
        ExpenseDeclaration.create({
          expense: Expense.create({
            allocationMethod: "NET_WEIGHT",
            currency: "USD",
            name: "Frete Internacional",
            useCustomsBase: true,
            useICMSBase: false,
          }),
          amount: 0,
        }),
        ExpenseDeclaration.create({
          expense: Expense.create({
            allocationMethod: "NET_VALUE",
            currency: "BRL",
            name: "Siscomex",
            useCustomsBase: false,
            useICMSBase: true,
          }),
          amount: 0,
        }),
      ],
      invoice: props.invoice,
      quote: props.quote,
      registration: props.registration,
    });
  }
}
