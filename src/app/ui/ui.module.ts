import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UiGalleryComponent } from './ui-gallery/ui-gallery.component';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UiGalleryComponent,
    LoadSpinnerComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoadSpinnerComponent,
  ]
})
export class UiModule { }
