import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list/visits-list.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';
import { AuthGuard } from '../core';
import { VisitsResolver, VisitResolver } from './shared';

const visitsRoutes: Routes = [
  {
    path: 'sorties',
    component: VisitsComponent,
    // require login to access visits
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: VisitsListComponent,
        resolve: { 'visits': VisitsResolver }
      },
      {
        path: ':id', component: VisitDetailComponent,
        resolve: { 'visit': VisitResolver }
      },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(visitsRoutes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
