import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'app/core';
import { BlueNavbarComponent } from './blue_navbar/blue_navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    BlueNavbarComponent,
    FooterComponent,
  ],
  exports: [
    BlueNavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
