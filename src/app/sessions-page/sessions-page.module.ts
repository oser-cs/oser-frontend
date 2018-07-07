import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MomentModule } from 'ngx-moment';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { SessionsPageRoutingModule } from './sessions-page-routing.module';

// Components
import { SessionsPageComponent } from './sessions-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule,
    AgmCoreModule,
    CoreModule,
    SharedModule,
    SessionsPageRoutingModule
  ],
  declarations: [
    SessionsPageComponent,
  ],
})
export class SessionsPageModule { }
