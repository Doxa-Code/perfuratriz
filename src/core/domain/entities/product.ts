import { ProductNCM } from "../value-objects/product-ncm";

export namespace Product {
  export interface Props {
    id: string;
    name: string;
    ncm: ProductNCM;
    weight: number;
    length: number;
    height: number;
    width: number;
  }
  export interface CreateProps {
    name: string;
    ncm: {
      code: number;
      cofins: number;
      icms: number;
      ipi: number;
      pis: number;
      tax: number;
    };
    weight: number;
    length: number;
    height: number;
    width: number;
  }
}

export class Product {
  public id: string;
  public name: string;
  public ncm: ProductNCM;
  public weight: number;
  public length: number;
  public height: number;
  public width: number;
  constructor(props: Product.Props) {
    this.id = props.id;
    this.name = props.name;
    this.ncm = props.ncm;
    this.weight = props.weight;
    this.length = props.length;
    this.height = props.height;
    this.width = props.width;
  }

  get volume() {
    const result = this.length * this.height * this.width;
    return Math.trunc(result * 100) / 100;
  }

  static instance(props: Product.Props) {
    return new Product(props);
  }

  static create(props: Product.CreateProps) {
    return new Product({
      height: props.height,
      id: crypto.randomUUID().toString(),
      length: props.length,
      name: props.name,
      ncm: ProductNCM.create(props.ncm),
      weight: props.weight,
      width: props.width,
    });
  }
}
