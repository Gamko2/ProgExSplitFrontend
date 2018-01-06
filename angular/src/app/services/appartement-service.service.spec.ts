import { TestBed, inject } from '@angular/core/testing';

import { AppartementServiceService } from './appartement-service.service';

describe('AppartementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppartementServiceService]
    });
  });

  it('should be created', inject([AppartementServiceService], (service: AppartementServiceService) => {
    expect(service).toBeTruthy();
  }));
});
