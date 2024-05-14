import { TestBed } from '@angular/core/testing';

import { StudentQuizeService } from './student-quize.service';

describe('StudentQuizeService', () => {
  let service: StudentQuizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentQuizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
