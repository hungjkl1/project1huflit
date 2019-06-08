import { TestBed, inject } from '@angular/core/testing';

import { DatatstorageService } from './datatstorage.service';

describe('DatatstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatstorageService]
    });
  });

  it('should ...', inject([DatatstorageService], (service: DatatstorageService) => {
    expect(service).toBeTruthy();
  }));
});
