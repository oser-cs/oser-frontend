import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProjectResolver, ProjectListResolver } from './core/project.service';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    resolve: { projects: ProjectListResolver },
  },
  {
    path: ':id',
    component: ProjectDetailComponent,
    resolve: { project: ProjectResolver },
  },
  {
    path: ':id/inscription',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
