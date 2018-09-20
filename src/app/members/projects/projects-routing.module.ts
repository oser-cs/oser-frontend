import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RegisterWizardComponent } from './register-wizard/register-wizard.component';
import { OverviewComponent } from './overview/overview.component';
import { MyParticipationsComponent } from './my-participations/my-participations.component';
import {
  ProjectResolver, ProjectListResolver,
  EditionOpenRegistrationListResolver,
  UserPendingParticipationListResolver,
  UserParticipationListResolver,
} from './core';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
        resolve: {
          projects: ProjectListResolver,
          editions: EditionOpenRegistrationListResolver,
          participations: UserPendingParticipationListResolver,
        },
      },/*
      {
        path: 'inscription',
        component: RegisterWizardComponent,
        resolve: { editions: EditionOpenRegistrationListResolver },
      },
      {
        path: 'mes-inscriptions',
        component: MyParticipationsComponent,
        resolve: { participations: UserParticipationListResolver },
      },
      {
        path: ':projectId',
        component: ProjectDetailComponent,
        resolve: { project: ProjectResolver },
      },*/
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
