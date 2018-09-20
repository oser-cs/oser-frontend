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
        canActivate: [AuthGuard],
        loadChildren: './visits/visits.module#VisitsModule',
      },
      {
        path: 'projets',
        canActivate: [AuthGuard],
        loadChildren: './projects/projects.module#ProjectsModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
