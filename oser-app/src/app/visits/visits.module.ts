import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { VisitsRoutingModule } from './visits-routing.module';
import { UiModule } from '@app/ui';

// Components
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

// Services
import { VisitService } from './shared/visit.service';

@NgModule({
  imports: [
    CommonModule,
    VisitsRoutingModule,
    UiModule,
  ],
  declarations: [
    VisitsComponent,
    VisitsListComponent,
    ToggleButtonComponent,
  ],
  providers: [
    VisitService,
  ],
})
export class VisitsModule { }
