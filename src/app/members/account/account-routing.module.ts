import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AccountComponent } from './account.component';
import {MyDataComponent} from './my-data/my-data.component'
import {EditDataComponent} from './edit-data/edit-data.component'
import {MyFileComponent} from './my-file/my-file.component'
import { PersonalDataResolver } from './core'
import {AccountValidationResolver} from './core'


const routes: Routes = [
  {
    path: '',
    data: { title: 'Mon Compte' },
    component: AccountComponent,
    children: [
      {
        path: 'donnees', 
        component: MyDataComponent,
        resolve : {
          'personalData' : PersonalDataResolver,
          //'validatedAccount' : AccountValidationResolver
        },
      },
      {
        path: 'modifier_donnees', component: EditDataComponent,
        resolve : {
          'personalData' : PersonalDataResolver
        },
        
      },
      // {
      //   path: 'mon_dossier', component: MyFileComponent,

      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
