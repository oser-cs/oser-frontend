import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { StudentsHomePageComponent } from './students-home-page.component';


const routes: Routes = [
  {
    path: 'students',
    data: { title: 'Espace Membre' },
    component: StudentsHomePageComponent,
    //canActivate: [AuthGuard],
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
export class StudentsHomePageRoutingModule { }

