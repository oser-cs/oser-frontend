import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { SessionsPageComponent } from './sessions-page.component';


const routes: Routes = [
  {
    path: '',
    data: { title: 'Séances' },
    component: SessionsPageComponent,
    canActivate: [AuthGuard],
    //children: [
      //{
        //path: '', component: VisitsListComponent,
        //resolve: { 'visits': VisitsResolver },
      //},
    //],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsPageRoutingModule { }
