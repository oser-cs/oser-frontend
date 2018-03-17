import { TestBed, inject } from '@angular/core/testing';

import { KeyFigureService } from './keyfigure.service';

describe('KeyFigureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyFigureService]
    });
  });

  it('should ...', inject([KeyFigureService], (service: KeyFigureService) => {
    expect(service).toBeTruthy();
  }));
});
