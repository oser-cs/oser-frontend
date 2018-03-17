import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailComponent } from './visit-detail.component';

describe('VisitDetailComponent', () => {
  let component: VisitDetailComponent;
  let fixture: ComponentFixture<VisitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
