import { TestBed } from '@angular/core/testing';

import { CommentTripApiService } from './comment-trip-api.service';

describe('CommentTripApiService', () => {
  let service: CommentTripApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentTripApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
