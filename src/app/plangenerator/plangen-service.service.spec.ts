import { TestBed } from '@angular/core/testing';

import { PlangenServiceService } from './plangen-service.service';

describe('PlangenServiceService', () => {
  let service: PlangenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlangenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
