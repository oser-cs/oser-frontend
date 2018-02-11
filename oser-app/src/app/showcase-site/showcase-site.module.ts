import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseSiteComponent } from './showcase-site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, ShowcaseSiteComponent],
  exports: [ShowcaseSiteComponent]
})
export class ShowcaseSiteModule { }
