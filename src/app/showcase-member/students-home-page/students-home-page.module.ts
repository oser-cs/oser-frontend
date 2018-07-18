import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentsHomePageRoutingModule } from './students-home-page-routing.module';

import { StudentsHomePageComponent } from './students-home-page.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { VisitsOverviewComponent } from './visits-overview/visits-overview.component';


@NgModule({
  imports: [
    CommonModule,
    StudentsHomePageRoutingModule,
    RouterModule,
  ],
  declarations: [
    StudentsHomePageComponent,
    ProjectsOverviewComponent,
    VisitsOverviewComponent,
  ],
})
export class StudentsHomePageModule { }
