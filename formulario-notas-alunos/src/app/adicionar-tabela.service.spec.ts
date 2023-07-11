import { TestBed } from '@angular/core/testing';

import { AdicionarTabelaService } from './adicionar-tabela.service';

describe('AdicionarTabelaService', () => {
  let service: AdicionarTabelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarTabelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
