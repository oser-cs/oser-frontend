import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsHomePageComponent } from './students-home-page';
import { ShowcaseEspacemembreComponent } from './showcase-espacemembre.component';
import { SessionsPageComponent } from './sessions-page';

//   import {} from './shared';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseEspacemembreComponent,
    children: [
      {
        path: 'students',
        component: StudentsHomePageComponent,
        resolve: {
        
        },
        
        data: { title: 'Accueil' },
      },
      {
        path: 'sessions',
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
