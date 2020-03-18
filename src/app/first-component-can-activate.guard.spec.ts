import { TestBed } from '@angular/core/testing';

import { FirstComponentCanActivateGuard } from './first-component-can-activate.guard';

describe('FirstComponentCanActivateGuard', () => {
  let guard: FirstComponentCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstComponentCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
