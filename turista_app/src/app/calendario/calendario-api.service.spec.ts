import { TestBed } from '@angular/core/testing';

import { CalendarioApiService } from './calendario-api.service';

describe('CalendarioApiService', () => {
  let service: CalendarioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
