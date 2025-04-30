export namespace Expense {
  export type AllocationMethod = "NET_WEIGHT" | "NET_VALUE" | "PER_UNIT";
  export type Currency = "USD" | "BRL";

  export interface Props {
    id: string;
    name: string;
    useICMSBase: boolean;
    useCustomsBase: boolean;
    allocationMethod: AllocationMethod;
    currency: Currency;
  }

  export interface CreateProps {
    name: string;
    useICMSBase?: boolean;
    useCustomsBase?: boolean;
    allocationMethod: AllocationMethod;
    currency: Currency;
  }
}

export class Expense {
  public id: string;
  public name: string;
  public useICMSBase: boolean;
  public useCustomsBase: boolean;
  public allocationMethod: Expense.AllocationMethod;
  public currency: Expense.Currency;

  constructor(props: Expense.Props) {
    this.id = props.id;
    this.name = props.name;
    this.useICMSBase = props.useICMSBase;
    this.useCustomsBase = props.useCustomsBase;
    this.allocationMethod = props.allocationMethod;
    this.currency = props.currency;
  }

  static instance(props: Expense.Props) {
    return new Expense(props);
  }

  static create(props: Expense.CreateProps) {
    return new Expense({
      id: crypto.randomUUID().toString(),
      name: props.name,
      useICMSBase: props.useICMSBase ?? false,
      useCustomsBase: props.useCustomsBase ?? false,
      allocationMethod: props.allocationMethod,
      currency: props.currency,
    });
  }
}
