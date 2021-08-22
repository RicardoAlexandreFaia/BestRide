import { TestBed } from '@angular/core/testing';

import { CommentApiService } from './comment-trip-api.service';

describe('CommentApiService', () => {
  let service: CommentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
