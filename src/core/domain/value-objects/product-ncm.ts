export class ProductNCM {
  constructor(
    readonly code: number,
    readonly cofins: number,
    readonly icms: number,
    readonly ipi: number,
    readonly pis: number,
    readonly tax: number
  ) {}

  static create(input: ProductNCMProps) {
    return new ProductNCM(
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
  code: number;
  cofins: number;
  icms: number;
  ipi: number;
  pis: number;
  tax: number;
};
