import { TestBed } from '@angular/core/testing';

import { CartSkipTestsService } from './cart--skip-tests.service';

describe('CartSkipTestsService', () => {
  let service: CartSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
