import { TestBed, inject } from '@angular/core/testing';

import { FigureService } from './figure.service';

describe('FigureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FigureService]
    });
  });

  it('should ...', inject([FigureService], (service: FigureService) => {
    expect(service).toBeTruthy();
  }));
});
