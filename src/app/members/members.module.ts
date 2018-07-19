import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { PanesModule } from 'app/panes';
import { Ng2EmojiModule } from 'ng2-emoji';
import { MembersRoutingModule } from './members-routing.module';

// Components
import { MembersComponent } from './members.component';
import { SessionsPageComponent } from './sessions-page';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { VisitsOverviewComponent } from './visits-overview/visits-overview.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    PanesModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    MembersRoutingModule,
  ],
  declarations: [
    MembersComponent,
    SessionsPageComponent,
    StudentHomeComponent,
    ProjectsOverviewComponent,
    VisitsOverviewComponent,
  ]
})
export class MembersModule { }
