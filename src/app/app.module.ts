import { LOCALE_ID } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// App modules
import { CoreModule } from '@app/core';
import { UiModule } from '@app/ui';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseSiteModule } from './showcase-site/showcase-site.module';

// Components
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NotFoundComponent } from '@app/core';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    UiModule,
    HttpClientModule,
    ShowcaseSiteModule,
    // Global routing module must be after all modules with child routers
    // to ensure wildcard pages are handled properly (eg 404 page).
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }