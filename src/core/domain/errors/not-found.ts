export class NotFound extends Error {
  constructor(field: string) {
    super(`${field} not found`);
    this.name = "NotFound";
  }
}
