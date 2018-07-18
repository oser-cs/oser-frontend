import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';
import { ShowcaseMemberRoutingModule } from './showcase-member-routing.module';

// Components
import { ShowcaseMemberComponent } from './showcase-member.component';
import { SessionsPageComponent } from './sessions-page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    ShowcaseMemberRoutingModule,
  ],
  declarations: [
    ShowcaseMemberComponent,
    SessionsPageComponent,
  ],
  exports: [
    ShowcaseMemberComponent
  ]
})
export class ShowcaseMemberModule { }
