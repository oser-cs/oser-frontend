import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
} from '@angular/material';

import { DynamicFormsModule } from 'app/dynamic-forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule,
    // Angular Material
    MatButtonModule,
    // App modules
    ProjectsRoutingModule,
    DynamicFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    RegistrationFormComponent,
    ProjectListComponent,
    ProjectDetailComponent,
  ],
})
export class ProjectsModule { }
