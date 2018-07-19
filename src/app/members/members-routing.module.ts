import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { MembersComponent } from './members.component';
import { SessionsPageComponent } from './sessions-page';


const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'accueil',
        data: { title: 'Accueil' },
        loadChildren: './students-home-page/students-home-page.module#StudentsHomePageModule',
      },
      {
        path: 'seances',
        data: { title: 'Séances' },
        component: SessionsPageComponent,
      },
      {
        path: 'sorties',
        loadChildren: './visits/visits.module#VisitsModule',
      },
      {
        path: 'projets',
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
