import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCardComponent } from './visit-card.component';

describe('VisitCardComponent', () => {
  let component: VisitCardComponent;
  let fixture: ComponentFixture<VisitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
