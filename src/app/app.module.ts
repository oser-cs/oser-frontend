import localeFR from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

// App modules
import { CoreModule } from './core';
import { UiModule } from './ui';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseSiteModule } from './showcase-site/showcase-site.module';
import { VisitsModule } from './visits';

// Components
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NotFoundComponent } from './core';

// Services
import { StudentService } from './signup-page/student.service';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MomentModule,
    CoreModule,
    UiModule,
    HttpClientModule,
    ShowcaseSiteModule,
    VisitsModule,
    // Global routing module must be after all modules with child routers
    // to ensure wildcard pages are handled properly (eg 404 page).
    AppRoutingModule,
  ],
  providers: [
    StudentService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
