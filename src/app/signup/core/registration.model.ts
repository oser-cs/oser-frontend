import { Injectable } from '@angular/core';
import { Address, AddressAdapter } from 'app/core';

interface EmergencyContact {
  firstName: string;
  lastName: string;
  email: string;
  homePhone: string;
  mobilePhone: string;
}

class RegistrationSchema {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone?: string;
  school: string;
  grade: string;
  address: Address;
  emergencyContact: EmergencyContact;
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
      date_of_birth: obj.dateOfBirth.toISOString(),
      phone: obj.phone,
      school: obj.school,
      grade: obj.grade,
      address: this.addressAdapter.encode(obj.address),
    }
  }
}
