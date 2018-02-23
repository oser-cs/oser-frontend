import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { LoginComponent } from '@app/ui';
import { AuthGuard } from '@app/core';

const visitsRoutes: Routes = [
  {
    path: 'visits',
    component: VisitsComponent,
    children: [
      {
        path: '',
        // require login to access visits
        canActivate: [AuthGuard],
        children: [
          { path: '', component: VisitsListComponent },
        ],
      },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(visitsRoutes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
