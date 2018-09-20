import { User, UserAdapter, IAdapter } from 'app/core';
import { EditionForm, EditionFormAdapter, EditionFormSimpleAdapter } from './edition-form.model';
import { Participation, ParticipationAdapter } from './participation.model';


export class OrganizerSchema {
  user: User;
  role: string;
}

export class Organizer extends OrganizerSchema {

  constructor(args: OrganizerSchema) {
    super();
    Object.assign(this, args);
  }
}

export class OrganizerAdapter implements IAdapter<Organizer> {

  private userAdapter = new UserAdapter();

  adapt(data: any): Organizer {
    return new Organizer({
      user: this.userAdapter.adapt(data.user),
      role: data.role,
    });
  }
}


export class EditionSchema {
  id: number;
  name: string;
  year: number;
  project: string;
  description: string;
  organizers: Organizer[];
  participations: Participation[];
  editionForm: EditionForm;
  participates: boolean;
}

export class Edition extends EditionSchema {

  constructor(args: EditionSchema) {
    super();
    Object.assign(this, args);
  }

  fullTitle(project): string {
    return project.name + ` ${this.year}` + (this.name ? ` (${this.name})` : '');
  }
}


export class EditionAdapter implements IAdapter<Edition> {

  private organizerAdapter = new OrganizerAdapter();
  private participationAdapter = new ParticipationAdapter();
  private editionFormAdapter = new EditionFormAdapter();

  adapt(data: any): Edition {
    return new Edition({
      id: data.id,
      name: data.name,
      description: data.description,
      year: data.year,
      project: data.project,
      organizers: data.organizers.map(item => this.organizerAdapter.adapt(item)),
      participations: data.participations.map(item => this.participationAdapter.adapt(item)),
      editionForm: data.edition_form ? this.editionFormAdapter.adapt(data.edition_form) : null,
      participates: data.participates,
    })
  }
}

export class EditionSimpleAdapter implements IAdapter<Edition> {

  private editionFormAdapter = new EditionFormSimpleAdapter();

  adapt(data: any): Edition {
    return new Edition({
      id: data.id,
      name: data.name,
      description: data.description,
      year: data.year,
      project: data.project,
      organizers: new Array(data.organizers),
      participations: new Array(data.participations),
      editionForm: data.edition_form ? this.editionFormAdapter.adapt(data.edition_form) : null,
      participates: data.participates,
    })
  }
}
