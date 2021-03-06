import HasFormatter from "../interfaces/HasFormatter.js";
export default class Payment implements HasFormatter {
  constructor(readonly recipient: string, private details: string, public amount: number) {}
  format = () => `${this.recipient} is owed $${this.amount} for ${this.details}`;
}
