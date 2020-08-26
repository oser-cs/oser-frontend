import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetConfirmComponent } from './reset-confirm.component';

describe('ResetConfirmComponent', () => {
  let component: ResetConfirmComponent;
  let fixture: ComponentFixture<ResetConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
