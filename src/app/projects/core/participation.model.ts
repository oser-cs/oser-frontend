import { User, UserAdapter, IAdapter } from 'app/core';


export class ParticipationSchema {
  id: number;
  submitted: Date;
  user: User;
  editionId: number;
  state: string;
}

export class Participation extends ParticipationSchema {

  constructor(args: ParticipationSchema) {
    super();
    Object.assign(this, args);
  }
}

export class ParticipationAdapter implements IAdapter<Participation> {

  private userAdapter = new UserAdapter();

  adapt(data: any): Participation {
    return new Participation({
      id: data.id,
      submitted: new Date(data.submitted),
      user: this.userAdapter.adapt(data.user),
      editionId: data.edition,
      state: data.state,
    });
  }
}
