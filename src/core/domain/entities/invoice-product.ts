import { truncCurrency } from "@/lib/utils";
import type { Product } from "../entities/product";

export class InvoiceProduct {
  constructor(
    readonly id: string,
    readonly product: Product,
    readonly quantity: number,
    readonly amount: number
  ) {}

  get total() {
    return this.quantity * this.amount;
  }

  get weight() {
    return this.quantity * this.product.weight;
  }

  get volume() {
    return this.quantity * this.product.volume;
  }

  convert(quote: number) {
    return Math.round(this.total * quote * 100) / 100;
  }

  percentWeight(totalWeight: number) {
    const result = this.weight / totalWeight;
    const weight = Math.trunc(result * 1000000) / 1000000;
    return weight;
  }

  percentAmount(totalAmount: number) {
    const result = this.total / totalAmount;
    const amount = Math.trunc(result * 1000000) / 1000000;
    return amount;
  }

  calculateInsuranceCostAllocation(
    invoiceTotal: number,
    declarationInsuranceAmount: number
  ) {
    const amount = this.percentAmount(invoiceTotal);
    const amountCostAllocation = truncCurrency(
      declarationInsuranceAmount * amount
    );

    return amountCostAllocation;
  }

  calculateSiscomexCostAllocation(
    invoiceTotal: number,
    declarationSiscomexAmount: number
  ) {
    const amount = this.percentAmount(invoiceTotal);
    const siscomexCostAllocation = truncCurrency(
      declarationSiscomexAmount * amount
    );

    return siscomexCostAllocation;
  }

  static create(props: Props) {
    return new InvoiceProduct(
      props.id ?? crypto.randomUUID().toString(),
      props.product,
      props.quantity ?? 0,
      props.amount ?? 0
    );
  }
}

type Props = {
  id?: string;
  product: Product;
  quantity: number;
  amount: number;
};
