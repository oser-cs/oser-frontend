import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
} from '@angular/material';
import { CoreModule } from 'app/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UiGalleryComponent } from './ui-gallery/ui-gallery.component';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { RevealComponent } from './reveal/reveal.component';
import { FilterComponent } from './filter/filter.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NavGroupVerticalComponent } from './nav-group-vertical/nav-group-vertical.component';
import { BlueNavbarComponent } from './blue_navbar/blue_navbar.component';
import { MailtoComponent } from './mailto/mailto.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    MatIconModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    UiGalleryComponent,
    LoadSpinnerComponent,
    RevealComponent,
    FilterComponent,
    NavItemComponent,
    NavGroupComponent,
    NavGroupVerticalComponent,
    BlueNavbarComponent,
    MailtoComponent,
    LoginButtonComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadSpinnerComponent,
    RevealComponent,
    FilterComponent,
    NavGroupComponent,
    NavGroupVerticalComponent,
    BlueNavbarComponent,
    MailtoComponent,
    LoginButtonComponent,
  ]
})
export class SharedModule { }
