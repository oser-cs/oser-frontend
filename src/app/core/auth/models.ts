export interface UserInfo {
  id: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
}

export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  dateOfBirth: Date;

  constructor(opts: UserInfo) {
    this.id = opts.id;
    this.email = opts.email;
    this.firstName = opts.firstName;
    this.lastName = opts.lastName;
    this.gender = opts.gender;
    this.phoneNumber = opts.phoneNumber;
    this.dateOfBirth = opts.dateOfBirth;
  }
}
