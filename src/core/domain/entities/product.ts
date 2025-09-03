import { ProductNCM } from "../value-objects/product-ncm";

export namespace Product {
  export interface Props {
    tid: string;
    id: string;
    name: string;
    description: string;
    ncm: ProductNCM;
    weight: number;
    length: number;
    height: number;
    width: number;
  }
  export interface CreateProps {
    tid: string;
    name: string;
    description: string;
    ncm: {
      id: string;
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
  public tid: string;
  public name: string;
  public description: string;
  public ncm: ProductNCM;
  public weight: number;
  public length: number;
  public height: number;
  public width: number;
  constructor(props: Product.Props) {
    this.id = props.id;
    this.tid = props.tid;
    this.name = props.name;
    this.description = props.description;
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
    return new Product({
      description: props.description ?? "",
      height: props.height ?? 0,
      id: props.id ?? "",
      length: props.length ?? 0,
      name: props.name ?? "",
      ncm: props.ncm,
      tid: props.tid ?? "",
      weight: props.weight ?? 0,
      width: props.width ?? 0,
    });
  }

  static create(props: Product.CreateProps) {
    return new Product({
      tid: props.tid,
      height: props.height,
      id: crypto.randomUUID().toString(),
      length: props.length,
      name: props.name,
      ncm: ProductNCM.create(props.ncm),
      weight: props.weight,
      width: props.width,
      description: props.description,
    });
  }
}
