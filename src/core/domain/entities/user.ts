export namespace User {
  export type Role = "admin";
  export interface Props {
    id: string;
    name: string;
    email: string;
    role: Role;
  }

  export interface CreateProps {
    name: string;
    email: string;
  }

  export interface Raw {
    id: string;
    name: string;
    email: string;
    role: Role;
  }
}

export class User {
  public id: string;
  public name: string;
  public email: string;
  public role: User.Role;

  constructor(props: User.Props) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
  }

  raw(): User.Raw {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
    };
  }

  static instance(props: User.Props) {
    return new User(props);
  }

  static create(props: User.CreateProps) {
    return new User({
      email: props.email,
      id: crypto.randomUUID().toString(),
      name: props.name,
      role: "admin",
    });
  }
}
