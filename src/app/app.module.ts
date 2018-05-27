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

// Services
import { StudentService } from './signup-page/student.service';
import { MessageService } from './core';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
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
    AppRoutingModule,
  ],
  providers: [
    StudentService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
