import { TestBed, inject } from '@angular/core/testing';

import { AllTweetsService } from './all-tweets.service';

describe('AllTweetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTweetsService]
    });
  });

  it('should ...', inject([AllTweetsService], (service: AllTweetsService) => {
    expect(service).toBeTruthy();
  }));
});
