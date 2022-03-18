export interface UserInfo {
  id: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;

  constructor(opts: UserInfo) {
    this.id = opts.id;
    this.email = opts.email;
    this.firstName = opts.firstName;
    this.lastName = opts.lastName;
    this.phoneNumber = opts.phoneNumber;
  }

  get fullName(): string {
    return [this.firstName, this.lastName].filter(x => !!x).join(' ');
  }
}
