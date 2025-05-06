export class ProductNCM {
  constructor(
    readonly id: string,
    readonly code: number,
    readonly cofins: number,
    readonly icms: number,
    readonly ipi: number,
    readonly pis: number,
    readonly tax: number
  ) {}

  static create(input: ProductNCMProps) {
    return new ProductNCM(
      input.id,
      input.code,
      input.cofins,
      input.icms,
      input.ipi,
      input.pis,
      input.tax
    );
  }
}

type ProductNCMProps = {
  id: string;
  code: number;
  cofins: number;
  icms: number;
  ipi: number;
  pis: number;
  tax: number;
};
