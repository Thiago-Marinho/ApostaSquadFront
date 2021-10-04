import { TestBed } from '@angular/core/testing';

import { TimePartidaService } from './time-partida.service';

describe('TimePartidaService', () => {
  let service: TimePartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimePartidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
