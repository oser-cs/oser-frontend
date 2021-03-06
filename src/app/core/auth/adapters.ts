import { User } from './models';

export class UserAdapter {

  adapt(item: any): User {
    return new User({
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      phoneNumber: item.phone_number,
    })
  }
}
