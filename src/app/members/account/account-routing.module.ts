import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import {MyDataComponent} from './my-data/my-data.component'
import {EditDataComponent} from './edit-data/edit-data.component'
import { PersonnalDataResolver } from './core'


const routes: Routes = [
  {
    path: '',
    data: { title: 'Mon Compte' },
    component: AccountComponent,
    children: [
      {
        path: 'donnees', 
        component: MyDataComponent,
        // resolve : {
        //   personnalData : PersonnalDataResolver
        // },
        
      },
      {
        path: 'modifier_donnees', component: EditDataComponent,
        // resolve : {
        //   personnalData : PersonnalDataResolver
        // },
        
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
