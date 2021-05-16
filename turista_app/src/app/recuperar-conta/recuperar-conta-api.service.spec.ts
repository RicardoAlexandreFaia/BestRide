import { TestBed } from '@angular/core/testing';

import { RecuperaContaApiService } from './recuperar-conta-api.service';

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