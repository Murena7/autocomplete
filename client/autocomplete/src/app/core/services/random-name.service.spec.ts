import { TestBed, inject } from '@angular/core/testing';

import { RandomNameService } from './random-name.service';

describe('RandomNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNameService]
    });
  });

  it('should be created', inject([RandomNameService], (service: RandomNameService) => {
    expect(service).toBeTruthy();
  }));
});
