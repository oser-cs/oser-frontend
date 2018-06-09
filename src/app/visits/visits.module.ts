import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { AgmCoreModule } from '@agm/core';
import { MomentModule } from 'ngx-moment';

// Components
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';

// Services
import { VisitService, ParticipantService } from './shared';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

// Resolvers
import { VisitsResolver, VisitResolver } from './shared';
import { RegistrationBadgeComponent } from './registration-badge/registration-badge.component';
import { ParticipantNumberBadgeComponent } from './participant-number-badge/participant-number-badge.component';
import { ParticipationBadgeComponent } from './participation-badge/participation-badge.component';
import { UsefulInformationComponent } from './useful-information/useful-information.component';
import { VisitLocationMapComponent } from './visit-location-map/visit-location-map.component';
import { OrganizerCardComponent } from './organizer-card/organizer-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    CoreModule,
    RouterModule,
    SharedModule,
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
    LeaveFormComponent,
    RegisterFormComponent,
    RegistrationBadgeComponent,
    ParticipantNumberBadgeComponent,
    ParticipationBadgeComponent,
    UsefulInformationComponent,
    VisitLocationMapComponent,
    OrganizerCardComponent,
  ],
  providers: [
    VisitService,
    ParticipantService,
    VisitsResolver,
    VisitResolver,
  ],
})
export class VisitsModule { }
