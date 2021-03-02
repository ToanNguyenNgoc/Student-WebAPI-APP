import { TestBed } from '@angular/core/testing';

import { StudentCommonService } from './student-common.service';

describe('StudentCommonService', () => {
  let service: StudentCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
