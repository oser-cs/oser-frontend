import { User } from './models';

export class UserAdapter {

  adapt(item: any): User {
    return new User({
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      gender: item.gender,
      phoneNumber: item.phone_number,
      dateOfBirth: item.date_of_birth ? new Date(item.date_of_birth) : null,
    })
  }
}
