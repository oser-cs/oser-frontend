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
import { VisitsModule } from './visits/visits.module';

// Components
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
  ],
  imports: [
    CoreModule,
    UiModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ShowcaseSiteModule,
    VisitsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
