import { IAdapter } from './interfaces';

export interface Country {
  name: string;
  code: string;
}


export class AddressSchema {
  line1: string;
  line2: string;
  postCode: string;
  city: string;
  country: Country;
}


export class Address extends AddressSchema {

  constructor(args: AddressSchema) {
    super();
    Object.assign(this, args);
  }

  toString(): string {
    return [this.line1, this.line2, this.postCode, this.city, this.country.name]
      .filter(el => el)
      .join(', ');
  }
}


export class AddressAdapter implements IAdapter<Address> {
  adapt(data: any): Address {
    return new Address({
      line1: data.line1,
      line2: data.line2,
      postCode: data.post_code,
      city: data.city,
      country: {
        name: data.country.name,
        code: data.country.code,
      },
    });
  }
}
