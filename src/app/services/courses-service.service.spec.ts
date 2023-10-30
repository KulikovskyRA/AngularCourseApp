import { TestBed } from '@angular/core/testing';

import { CoursesserviceService } from './courses-service.service';

describe('CoursesserviceService', () => {
  let service: CoursesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
