import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { PanesModule } from 'app/panes';
import {
  MatButtonModule,
} from '@angular/material';

// Components
import { StudentHomeComponent } from './student-home.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { VisitsOverviewComponent } from './visits-overview/visits-overview.component';
import {AccountOverviewComponent} from './account-overview/account-overview.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    CoreModule,
    PanesModule,
    SharedModule,
    MatButtonModule,
  ],
  declarations: [
    StudentHomeComponent,
    ProjectsOverviewComponent,
    VisitsOverviewComponent,
    AccountOverviewComponent,
  ]
})

export class StudentHomeModule { }
