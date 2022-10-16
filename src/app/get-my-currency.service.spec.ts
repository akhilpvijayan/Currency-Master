import { TestBed } from '@angular/core/testing';

import { GetMyCurrencyService } from './get-my-currency.service';

describe('GetMyCurrencyService', () => {
  let service: GetMyCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMyCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
