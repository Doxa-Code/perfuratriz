export namespace NCM {
  export interface Props {
    id: string;
    code: number;
    tax: number;
    icms: number;
    pis: number;
    cofins: number;
    pisSales: number;
    cofinsSales: number;
    ipi: number;
    difal: boolean;
    reductionCalculationBase: number;
  }
}

export class NCM {
  public id: string;
  public code: number;
  public tax: number;
  public icms: number;
  public pis: number;
  public cofins: number;
  public pisSales: number;
  public cofinsSales: number;
  public ipi: number;
  public difal: boolean;
  public reductionCalculationBase: number;

  constructor(props: NCM.Props) {
    this.id = props.id;
    this.code = props.code;
    this.tax = props.tax;
    this.icms = props.icms;
    this.pis = props.pis;
    this.cofins = props.cofins;
    this.pisSales = props.pisSales;
    this.cofinsSales = props.cofinsSales;
    this.ipi = props.ipi;
    this.difal = props.difal;
    this.reductionCalculationBase = props.reductionCalculationBase;
  }

  static instance(props: NCM.Props) {
    return new NCM({
      code: props.code ?? 0,
      icms: props.icms ?? 0,
      id: props.id ?? "",
      ipi: props.ipi ?? 0,
      pis: props.pis ?? 0,
      cofins: props.cofins ?? 0,
      pisSales: props.pisSales ?? 0,
      cofinsSales: props.cofinsSales ?? 0,
      tax: props.tax ?? 0,
      difal: props.difal ?? false,
      reductionCalculationBase: props.reductionCalculationBase ?? 0,
    });
  }

  static create(props: Omit<NCM.Props, "id">) {
    return new NCM({
      id: crypto.randomUUID().toString(),
      code: props.code,
      icms: props.icms,
      ipi: props.ipi,
      pis: props.pis,
      cofins: props.cofins,
      pisSales: props.pisSales || props.pis,
      cofinsSales: props.cofinsSales || props.cofins,
      tax: props.tax,
      difal: props.difal ?? false,
      reductionCalculationBase: props.reductionCalculationBase ?? false,
    });
  }
}
