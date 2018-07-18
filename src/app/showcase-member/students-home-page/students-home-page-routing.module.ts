import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsHomePageComponent } from './students-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsHomePageRoutingModule { }
