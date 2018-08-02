import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTuteurComponent } from './signup-tuteur.component';

describe('SignupTuteurComponent', () => {
  let component: SignupTuteurComponent;
  let fixture: ComponentFixture<SignupTuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
