import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { PanesModule } from 'app/panes';
import { StudentHomeRoutingModule } from './student-home-routing.module';

// Components
import { StudentHomeComponent } from './student-home.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { VisitsOverviewComponent } from './visits-overview/visits-overview.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    CoreModule,
    PanesModule,
    SharedModule,
    StudentHomeRoutingModule,
  ],
  declarations: [
    StudentHomeComponent,
    ProjectsOverviewComponent,
    VisitsOverviewComponent,
  ]
})

export class StudentHomeModule { }