import { TestBed } from '@angular/core/testing';

import { BackToLogInGuard } from './back-to-log-in.guard';

describe('BackToLogInGuard', () => {
  let guard: BackToLogInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackToLogInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
