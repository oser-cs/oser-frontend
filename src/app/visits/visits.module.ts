import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitsRoutingModule } from './visits-routing.module';
import { CoreModule } from '../core';
import { UiModule } from '../ui';
import { AgmCoreModule } from '@agm/core';

// Components
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';

// Services
import { VisitService, ParticipantService } from './shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    UiModule,
    VisitsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXPxwZpx9EiwarLAZ3yzUANK9D4q0X9cI',
    }),
  ],
  declarations: [
    VisitsComponent,
    VisitsListComponent,
    ToggleButtonComponent,
    VisitCardComponent,
    VisitDetailComponent,
  ],
  providers: [
    VisitService,
    ParticipantService,
  ],
})
export class VisitsModule { }
