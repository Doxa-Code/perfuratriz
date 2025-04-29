export class FieldInvalid extends Error {
  constructor(field: string) {
    super(`${field} is invalid`);
    this.name = "FieldInvalid";
  }
}
