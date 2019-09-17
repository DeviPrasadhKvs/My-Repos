import { TestBed } from '@angular/core/testing';

import { SafeUrlService } from './safe-url.service';

describe('SafeUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafeUrlService = TestBed.get(SafeUrlService);
    expect(service).toBeTruthy();
  });
});
