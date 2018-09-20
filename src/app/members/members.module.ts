import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { PanesModule } from 'app/panes';
import { Ng2EmojiModule } from 'ng2-emoji';
import { MembersRoutingModule } from './members-routing.module';
import { StudentHomeModule } from './student-home/student-home.module';
// Components
import { MembersComponent } from './members.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    PanesModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    MembersRoutingModule,
    StudentHomeModule,
  ],
  declarations: [
    MembersComponent,
  ]
})
export class MembersModule { }
