import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { MembersComponent } from './members.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        data: { title: 'Accueil' },
        component: StudentHomeComponent,
      },
      {
        path: 'sorties',
        data: { title: 'Sorties' },
        loadChildren: './visits/visits.module#VisitsModule',
      },
      {
        path: 'projets',
        data: { title: 'Projets' },
        loadChildren: './projects/projects.module#ProjectsModule',
      },
      {
        path: 'compte',
        data: { title: 'Mon Compte' },
        loadChildren : './account/account.module#AccountModule', 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
