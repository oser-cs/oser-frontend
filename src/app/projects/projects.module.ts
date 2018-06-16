import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsModule } from 'app/dynamic-forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EditionCardComponent } from './edition-card/edition-card.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DynamicFormsModule,
  ],
  declarations: [RegistrationFormComponent, ProjectListComponent, ProjectDetailComponent, EditionCardComponent]
})
export class ProjectsModule { }
