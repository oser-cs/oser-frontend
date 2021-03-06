import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsAPIResolver } from 'app/core';

import { VisitsComponent } from './visits.component';
import { VisitsListComponent } from './visits-list';
import { VisitDetailComponent } from './visit-detail';
import { VisitsResolver, VisitResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Sorties' },
    component: VisitsComponent,
    children: [
      {
        path: '', component: VisitsListComponent,
        resolve: { 'visits': VisitsResolver },
      },
      {
        path: ':id', component: VisitDetailComponent,
        resolve: { 'visit': VisitResolver, 'geocoder': MapsAPIResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
