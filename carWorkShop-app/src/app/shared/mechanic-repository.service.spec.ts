import { TestBed } from '@angular/core/testing';

import { MechanicRepositoryService } from './mechanic-repository.service';

describe('MechanicRepositoryService', () => {
  let service: MechanicRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechanicRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
