import { TestBed } from '@angular/core/testing';

import { ResultadoApostaService } from './resultado-aposta.service';

describe('ResultadoApostaService', () => {
  let service: ResultadoApostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoApostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
