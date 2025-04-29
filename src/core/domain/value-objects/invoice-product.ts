export class InvoiceProduct {
  constructor(
    readonly productId: string,
    readonly productName: string,
    readonly productWeight: number,
    readonly productVolume: number,
    readonly quantity: number,
    readonly amount: number
  ) {}

  get total() {
    return this.quantity * this.amount;
  }

  get weight() {
    return this.quantity * this.productWeight;
  }

  get volume() {
    return this.quantity * this.productVolume;
  }

  static create(props: Props) {
    return new InvoiceProduct(
      props.productId,
      props.productName,
      props.productWeight,
      props.productVolume,
      props.quantity,
      props.amount
    );
  }
}

type Props = {
  productId: string;
  productName: string;
  productWeight: number;
  productVolume: number;
  quantity: number;
  amount: number;
};
