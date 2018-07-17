import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';
import { ShowcaseEspacemembreRoutingModule } from './showcase-espacemembre-routing.module';

// Components
import { ShowcaseEspacemembreComponent } from './showcase-espacemembre.component';
import { StudentsHomePageComponent } from './students-home-page';
import { SessionsPageComponent } from './sessions-page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    ShowcaseEspacemembreRoutingModule,
  ],
  declarations: [
    ShowcaseEspacemembreComponent,
    StudentsHomePageComponent,
    SessionsPageComponent,
  ],
  exports: [
    ShowcaseEspacemembreComponent
  ]
})
export class ShowcaseEspacemembreModule { }
