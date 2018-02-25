export class Place {
  name: string;
  address: string;

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
