import { TestBed } from '@angular/core/testing';

import { RecuperaContaApiService } from './recover-account-api.service';

describe('RecuperaContaApiService', () => {
  let service: RecuperaContaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperaContaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
