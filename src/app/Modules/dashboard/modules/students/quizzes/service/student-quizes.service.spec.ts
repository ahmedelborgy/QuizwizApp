import { TestBed } from '@angular/core/testing';

import { StudentQuizesService } from './student-quizes.service';

describe('StudentQuizesService', () => {
  let service: StudentQuizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentQuizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
