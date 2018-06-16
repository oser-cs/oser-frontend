import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProjectResolver, ProjectListResolver, EditionResolver } from './core';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent,
        resolve: { projects: ProjectListResolver },
      },
      {
        path: ':projectId',
        component: ProjectDetailComponent,
        resolve: { project: ProjectResolver },
      },
      {
        path: ':projectId/:editionId/inscription',
        component: RegistrationFormComponent,
        resolve: {
          edition: EditionResolver,
          project: ProjectResolver
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
