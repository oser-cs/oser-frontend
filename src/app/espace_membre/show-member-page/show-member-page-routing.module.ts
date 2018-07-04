import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowMemberPageComponent } from './show-member-page.component';
import { VisitsPageComponent } from './visits-page/visits-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SessionsPageComponent } from './sessions-page/sessions-page.component';
import { MentionsComponent } from './mentions/mentions.component';
import { StudentsHomePageComponent } from './students-home-page/students-home-page.component';

/*
import {
_____Resolver,
} from '../shared';
*/
const routes: Routes = [
  {
    path: '',
    component: ShowMemberPageComponent,
    children: [
      {
        path: 'nos-visites',
        component: VisitsPageComponent,
        resolve: {
          //'____': ______Resolver,
        },
        data: { title: 'Visites' },
      },
      {
        path: 'nos-projets',
        component: ProjectsPageComponent,
        resolve: { 
          

         },
        data: { title: 'Projets' },
      },
      {
        path: 'nos-seances',
        component: SessionsPageComponent,
        resolve: {

          
        },
        data: { title: 'Séances' },
      },
      {
        path: 'espace-membre',
        component: StudentsHomePageComponent,
        resolve: { 
          

        },
        data: { title: 'Espace Membre' },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowMemberPageRoutingModule { }
