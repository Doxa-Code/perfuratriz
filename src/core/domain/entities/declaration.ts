import type { ExpenseDeclaration } from "./expense-declaration";
import type { Invoice } from "./invoice";

export namespace Declaration {
  export interface Props {
    id: string;
    registration: string;
    quote: number;
    createdAt: Date;
    invoice: Invoice;
    expenses: ExpenseDeclaration[];
  }
  export interface CreateProps {
    registration: string;
    quote: number;
    invoice: Invoice;
    createdAt?: Date;
  }
}

export class Declaration {
  public id: string;
  public registration: string;
  public createdAt: Date;
  public quote: number;
  public invoice: Invoice;
  public expenses: ExpenseDeclaration[];

  constructor(props: Declaration.Props) {
    this.id = props.id;
    this.registration = props.registration;
    this.quote = props.quote;
    this.createdAt = props.createdAt;
    this.invoice = props.invoice;
    this.expenses = props.expenses;
  }

  addExpense(expense: ExpenseDeclaration) {
    this.expenses.push(expense);
  }

  static instance(props: Declaration.Props) {
    return new Declaration({
      createdAt: props.createdAt,
      expenses: props.expenses,
      id: props.id ?? "",
      invoice: props.invoice,
      quote: props.quote ?? 0,
      registration: props.registration ?? "",
    });
  }

  static create(props: Declaration.CreateProps) {
    return new Declaration({
      id: crypto.randomUUID().toString(),
      expenses: [],
      invoice: props.invoice,
      quote: props.quote,
      registration: props.registration,
      createdAt: props.createdAt ?? new Date(),
    });
  }
}
