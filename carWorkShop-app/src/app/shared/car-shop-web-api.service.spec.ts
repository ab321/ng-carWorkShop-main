import { TestBed } from '@angular/core/testing';

import { CarShopWebApiService } from './car-shop-web-api.service';

describe('CarShopWebApiService', () => {
  let service: CarShopWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarShopWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
