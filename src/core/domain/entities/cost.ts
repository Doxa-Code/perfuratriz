export namespace Cost {
  export interface Props {
    id: string;
    description: string;
    value: number;
  }
  export interface CreateProps {
    description: string;
    value: number;
  }
}

export class Cost {
  public id: string;
  public description: string;
  public value: number;

  constructor(props: Cost.Props) {
    this.id = props.id;
    this.description = props.description;
    this.value = props.value;
  }

  static instance(props: Partial<Cost.Props>) {
    return new Cost({
      id: props.id ?? crypto.randomUUID().toString(),
      description: props.description ?? "",
      value: props.value ?? 0,
    });
  }

  static create(props: Cost.CreateProps) {
    return new Cost({
      id: crypto.randomUUID().toString(),
      description: props.description ?? "",
      value: props.value ?? 0,
    });
  }
}
