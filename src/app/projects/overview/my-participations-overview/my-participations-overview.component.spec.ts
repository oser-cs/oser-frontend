import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParticipationsOverviewComponent } from './my-participations-overview.component';

describe('MyParticipationsOverviewComponent', () => {
  let component: MyParticipationsOverviewComponent;
  let fixture: ComponentFixture<MyParticipationsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParticipationsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParticipationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
