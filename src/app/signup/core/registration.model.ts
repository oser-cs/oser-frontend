import { Injectable } from '@angular/core';
import { Address, AddressAdapter } from 'app/core';

class RegistrationSchema {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export class Registration extends RegistrationSchema {

  constructor(args: RegistrationSchema) {
    super();
    Object.assign(this, args);
  }
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationAdapter {

  constructor(private addressAdapter: AddressAdapter) { }

  encode(obj: Registration): any {
    return {
      email: obj.email,
      first_name: obj.firstName,
      last_name: obj.lastName,
      phone_number: obj.phoneNumber,
    }
  }
}
