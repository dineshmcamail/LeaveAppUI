import { TestBed } from '@angular/core/testing';

import { EmpdetailService } from './empdetail.service';

describe('EmpdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpdetailService = TestBed.get(EmpdetailService);
    expect(service).toBeTruthy();
  });
});
