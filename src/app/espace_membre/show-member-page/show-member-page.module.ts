import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';
import { ShowMemberPageRoutingModule } from './show-member-page-routing.module';

// Components
import { ShowMemberPageComponent } from './show-member-page.component';
import { VisitsPageComponent } from './visits-page';
import { ProjectsPageComponent } from './projects-page';
import { SessionsPageComponent } from './sessions-page';
import { StudentsHomePageComponent } from './students-home-page';
import { MentionsComponent } from './mentions';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    ShowMemberPageRoutingModule,
  ],
  declarations: [
    ShowMemberPageComponent,
    StudentsHomePageComponent,
    VisitsPageComponent,
    ProjectsPageComponent,
    SessionsPageComponent,
    MentionsComponent,
  ],
  exports: [
    ShowMemberPageComponent
  ]
})
export class ShowMemberPageModule { }
