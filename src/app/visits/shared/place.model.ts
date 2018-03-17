export class Place {
  name: string;
  address: string;
  description: string;

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
