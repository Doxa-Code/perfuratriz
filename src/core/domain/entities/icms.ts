import { states } from "@/constants";

export namespace ICMS {
  export interface Props {
    id: string;
    state: string;
    stateLabel: string;
    icms: number;
  }
  export interface CreateProps {
    state: string;
    stateLabel: string;
    icms: number;
  }
}

export class ICMS {
  public id: string;
  public state: string;
  public stateLabel: string;
  public icms: number;

  constructor(props: ICMS.Props) {
    this.id = props.id;
    this.state = props.state;
    this.stateLabel = props.stateLabel;
    this.icms = props.icms;
  }

  static instance(props: Partial<ICMS.Props>) {
    return new ICMS({
      id: props.id ?? crypto.randomUUID().toString(),
      state: props.state ?? "",
      stateLabel:
        props.stateLabel ??
        states.find((s) => s.value === props.state)?.label ??
        "",
      icms: props.icms ?? 0,
    });
  }

  static create(props: ICMS.CreateProps) {
    return new ICMS({
      id: crypto.randomUUID().toString(),
      state: props.state ?? "",
      stateLabel: props.stateLabel ?? "",
      icms: props.icms ?? 0,
    });
  }
}
