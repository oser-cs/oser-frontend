import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealComponent } from './reveal.component';

describe('RevealComponent', () => {
  let component: RevealComponent;
  let fixture: ComponentFixture<RevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
