import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatSnackBarModule,
} from '@angular/material';

import { MomentModule } from 'ngx-moment';

import { SharedModule } from 'app/shared';
import { DynamicFormsModule } from 'app/dynamic-forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { RegisterWizardComponent } from './register-wizard/register-wizard.component';
import { MyParticipationsComponent } from './my-participations/my-participations.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    // Angular Material
    MatButtonModule,
    MatSnackBarModule,
    // App modules
    SharedModule,
    ProjectsRoutingModule,
    DynamicFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    RegistrationFormComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    OverviewComponent,
    RegisterWizardComponent,
    MyParticipationsComponent,
    NavbarComponent,
  ],
})
export class ProjectsModule { }
