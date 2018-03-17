import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSiteComponent } from './showcase-site.component';

describe('ShowcaseSiteComponent', () => {
  let component: ShowcaseSiteComponent;
  let fixture: ComponentFixture<ShowcaseSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
