import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { VisitsRoutingModule } from './visits-routing.module';
import { CoreModule } from '@app/core';
import { UiModule } from '@app/ui';

// Components
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

// Services
import { VisitService } from './shared/visit.service';
import { VisitCardComponent } from './visit-card/visit-card.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    VisitsRoutingModule,
  ],
  declarations: [
    VisitsComponent,
    VisitsListComponent,
    ToggleButtonComponent,
    VisitCardComponent,
  ],
  providers: [
    VisitService,
  ],
})
export class VisitsModule { }
