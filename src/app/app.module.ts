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
import { MatProgressBarModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
} from '@angular/material';

// App modules
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SignupTutoreOneComponent } from './signup-page/signup-tutoré-firstPage/signup-page.component';
import { SignupTutoreTwoComponent } from './signup-page/signup-tutoré-secondPage/signup-page.component';
import { SignupTuteurComponent } from './signup-page/signup-tuteur/signup-tuteur.component';

// Services
import { StudentService } from './signup-page/signup-tutoré-firstPage/student.service';
import { MessageService } from './core';
import { SplashComponent } from './splash/splash.component';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    SignupTutoreOneComponent,
    SignupTutoreTwoComponent,
    SignupTuteurComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MomentModule,
    MatProgressBarModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  providers: [
    StudentService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
