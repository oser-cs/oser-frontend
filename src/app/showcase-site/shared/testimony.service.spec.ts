import { TestBed, inject } from '@angular/core/testing';

import { TestimonyService } from './testimony.service';

describe('TestimonyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestimonyService]
    });
  });

  it('should ...', inject([TestimonyService], (service: TestimonyService) => {
    expect(service).toBeTruthy();
  }));
});
