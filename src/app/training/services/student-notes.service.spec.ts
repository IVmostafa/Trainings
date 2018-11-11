import { TestBed } from '@angular/core/testing';

import { StudentNotesService } from './student-notes.service';

describe('StudentNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentNotesService = TestBed.get(StudentNotesService);
    expect(service).toBeTruthy();
  });
});
