import { TestBed } from '@angular/core/testing';

import { ApostaService } from './aposta.service';

describe('ApostaService', () => {
  let service: ApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
