import { TestBed, async, inject } from '@angular/core/testing';

import { SecurePagesGuard } from './secure-pages.guard';

describe('SecurePagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurePagesGuard]
    });
  });

  it('should ...', inject([SecurePagesGuard], (guard: SecurePagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
