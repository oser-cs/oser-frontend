import { TestBed, async } from '@angular/core/testing';

// Misc
import {APP_BASE_HREF} from '@angular/common';
// Modules
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MessageModule } from 'app/core';
// Components
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from './auth/login.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SignupPageComponent,
        LoginComponent,
      ],
      imports: [
        FormsModule,
        AppRoutingModule,
        MessageModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});
