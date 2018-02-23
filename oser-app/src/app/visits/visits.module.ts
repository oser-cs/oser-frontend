import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { VisitsRoutingModule } from './visits-routing.module';
import { CoreModule } from '@app/core';
import { UiModule } from '@app/ui';
import { AgmCoreModule } from '@agm/core';


// Components
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

// Services
import { VisitService } from './shared/visit.service';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';

@NgModule({
  imports: [
    CommonModule,
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
  ],
})
export class VisitsModule { }
