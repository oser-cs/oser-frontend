import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { ShowcaseMemberComponent } from './showcase-member.component';
import { SessionsPageComponent } from './sessions-page';


const routes: Routes = [
  {
    path: '',
    component: ShowcaseMemberComponent,
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
        resolve: {
        
        },
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
export class ShowcaseMemberRoutingModule { }
