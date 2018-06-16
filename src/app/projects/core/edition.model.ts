import { User, UserAdapter, IAdapter } from 'app/core';
import { EditionForm, EditionFormAdapter } from './edition-form.model';
import { Participation, ParticipationAdapter } from './participation.model';


export class EditionSchema {
  id: number;
  name: string;
  year: number;
  projectId: number;
  description: string;
  organizers: User[];
  participations: Participation[];
  editionForm: EditionForm;
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

  private userAdapter = new UserAdapter();
  private participationAdapter = new ParticipationAdapter();
  private editionFormAdapter = new EditionFormAdapter();

  adapt(data: any): Edition {
    return new Edition({
      id: data.id,
      name: data.name,
      description: data.description,
      year: data.year,
      projectId: data.project,
      organizers: data.organizers.map(item => this.userAdapter.adapt(item)),
      participations: data.participations.map(item => this.participationAdapter.adapt(item)),
      editionForm: data.edition_form ? this.editionFormAdapter.adapt(data.edition_form) : null,
    })
  }
}

export class EditionSimpleAdapter implements IAdapter<Edition> {

  adapt(data: any): Edition {
    return new Edition({
      id: data.id,
      name: data.name,
      description: data.description,
      year: data.year,
      projectId: data.project,
      organizers: new Array(data.organizers),
      participations: new Array(data.participations),
      editionForm: null,
    })
  }
}
