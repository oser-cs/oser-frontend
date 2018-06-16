import { IAdapter } from 'app/core';


export class ProjectSchema {
  id: number;
  name: string;
  description: string;
  logo: string;
}


export class Project extends ProjectSchema {

  constructor(args: ProjectSchema) {
    super();
    Object.assign(this, args);
  }
}


export class ProjectAdapter implements IAdapter<Project> {

  adapt(data: any): Project {
    return new Project({
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
    });
  }
}
