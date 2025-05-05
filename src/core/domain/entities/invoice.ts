import type { InvoiceProduct } from "../value-objects/invoice-product";

export namespace Invoice {
  export interface Props {
    id: string;
    registration: string;
    createdAt: Date;
    quote: number;
    products: InvoiceProduct[];
  }
  export interface CreateProps {
    registration: string;
    quote: number;
    createdAt?: Date;
  }
}

export class Invoice {
  public id: string;
  public registration: string;
  public createdAt: Date;
  public quote: number;
  private _products: Map<string, InvoiceProduct>;

  constructor(props: Invoice.Props) {
    this.id = props.id;
    this.registration = props.registration;
    this.createdAt = props.createdAt;
    this.quote = props.quote;
    this.products = props.products;
  }

  static instance(props: Invoice.Props) {
    return new Invoice(props);
  }

  set products(products: InvoiceProduct[]) {
    if (!this._products) {
      this._products = new Map();
    }

    for (const invoiceProduct of products) {
      this._products.set(invoiceProduct.product.id, invoiceProduct);
    }
  }

  get products() {
    return Array.from(this._products.values());
  }

  get quantity() {
    let result = 0;
    for (const invoiceProduct of this.products) {
      result += invoiceProduct.quantity;
    }
    return result;
  }

  get amount() {
    let result = 0;
    for (const invoiceProduct of this.products) {
      result += invoiceProduct.total;
    }
    return result;
  }

  get weight() {
    let result = 0;
    for (const invoiceProduct of this.products) {
      result += invoiceProduct.weight;
    }
    return result;
  }

  get volume() {
    let result = 0;
    for (const invoiceProduct of this.products) {
      result += invoiceProduct.volume;
    }
    return result;
  }

  add(invoiceProduct: InvoiceProduct) {
    this._products.set(invoiceProduct.product.id, invoiceProduct);
  }

  static create(props: Invoice.CreateProps) {
    return new Invoice({
      createdAt: props.createdAt ?? new Date(),
      id: crypto.randomUUID().toString(),
      quote: props.quote,
      registration: props.registration,
      products: [],
    });
  }
}
