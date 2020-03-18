import { TestBed } from '@angular/core/testing';

import { ComponentCanDeactivateGuard } from './component-can-deactivate.guard';

describe('ComponentCanDeactivateGuard', () => {
  let guard: ComponentCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComponentCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
