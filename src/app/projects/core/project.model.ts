import { IAdapter } from 'app/core';
import { Edition, EditionSimpleAdapter } from './edition.model';


export class ProjectSchema {
  id: number;
  name: string;
  description: string;
  logo: string;
  editions: Edition[];
}


export class Project extends ProjectSchema {

  constructor(args: ProjectSchema) {
    super();
    Object.assign(this, args);
  }
}


export class ProjectSimpleAdapter implements IAdapter<Project> {

  adapt(data: any): Project {
    return new Project({
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
      editions: null,
    });
  }
}


export class ProjectAdapter implements IAdapter<Project> {

  private editionAdapter = new EditionSimpleAdapter();

  adapt(data: any): Project {
    return new Project({
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
      editions: data.editions.map(item => this.editionAdapter.adapt(item)),
    });
  }
}
