import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTutoreTwoComponent } from './signup-page.component';

describe('SignupTutoreTwoComponent', () => {
  let component: SignupTutoreTwoComponent;
  let fixture: ComponentFixture<SignupTutoreTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTutoreTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTutoreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
