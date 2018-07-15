import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, MapsAPIResolver } from 'app/core';

import { StudentsHomePageComponent } from './students-home-page';
import { ShowcaseEspacemembreComponent } from './showcase-espacemembre.component';
import { SessionsPageComponent } from './sessions-page';

//   import {} from './shared';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseEspacemembreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'students',
        data: { title: 'Accueil' },
        component: StudentsHomePageComponent,
        resolve: {
        
        },
      },
      {
        path: 'sessions',
        data: { title: 'Séances' },
        component: SessionsPageComponent,
        resolve: {
        
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseEspacemembreRoutingModule { }
