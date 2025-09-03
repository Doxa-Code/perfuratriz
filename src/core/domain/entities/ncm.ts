export namespace NCM {
  export interface Props {
    id: string;
    code: number;
    tax: number;
    icms: number;
    pis: number;
    cofins: number;
    ipi: number;
  }
}

export class NCM {
  public id: string;
  public code: number;
  public tax: number;
  public icms: number;
  public pis: number;
  public cofins: number;
  public ipi: number;
  constructor(props: NCM.Props) {
    this.id = props.id;
    this.code = props.code;
    this.tax = props.tax;
    this.icms = props.icms;
    this.pis = props.pis;
    this.cofins = props.cofins;
    this.ipi = props.ipi;
  }

  static instance(props: NCM.Props) {
    return new NCM({
      code: props.code ?? 0,
      cofins: props.cofins ?? 0,
      icms: props.icms ?? 0,
      id: props.id ?? "",
      ipi: props.ipi ?? 0,
      pis: props.pis ?? 0,
      tax: props.tax ?? 0,
    });
  }

  static create(props: Omit<NCM.Props, "id">) {
    return new NCM({
      id: crypto.randomUUID().toString(),
      code: props.code,
      cofins: props.cofins,
      icms: props.icms,
      ipi: props.ipi,
      pis: props.pis,
      tax: props.tax,
    });
  }
}
