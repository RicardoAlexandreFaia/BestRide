import { TestBed } from '@angular/core/testing';

import { IntroduzirCodigoApiService } from './introduzir-codigo-api.service';

describe('IntroduzirCodigoApiService', () => {
  let service: IntroduzirCodigoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroduzirCodigoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});