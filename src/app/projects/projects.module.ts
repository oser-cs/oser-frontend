import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatSnackBarModule,
  MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

import { MomentModule } from 'ngx-moment';

import { SharedModule } from 'app/shared';
import { DynamicFormsModule } from 'app/dynamic-forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OverviewComponent, OpenRegistrationsComponent, MyParticipationsOverviewComponent } from './overview';
import { RegisterWizardComponent } from './register-wizard/register-wizard.component';
import { MyParticipationsComponent } from './my-participations/my-participations.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Third party
    MomentModule,
    // Angular Material
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    // App modules
    SharedModule,
    ProjectsRoutingModule,
    DynamicFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    NavbarComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    OverviewComponent,
    OpenRegistrationsComponent,
    MyParticipationsComponent,
    RegisterWizardComponent,
    MyParticipationsOverviewComponent,
  ],
})
export class ProjectsModule { }
