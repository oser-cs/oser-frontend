import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTutoreOneComponent } from './signup-page.component';

describe('SignupTutoreOneComponent', () => {
  let component: SignupTutoreOneComponent;
  let fixture: ComponentFixture<SignupTutoreOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTutoreOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTutoreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
