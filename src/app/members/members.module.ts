import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';
import { MembersRoutingModule } from './members-routing.module';

// Components
import { MembersComponent } from './members.component';
import { SessionsPageComponent } from './sessions-page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    MembersRoutingModule,
  ],
  declarations: [
    MembersComponent,
    SessionsPageComponent,
  ]
})
export class MembersModule { }
