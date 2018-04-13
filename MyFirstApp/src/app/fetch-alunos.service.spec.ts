import { TestBed, inject } from '@angular/core/testing';

import { FetchAlunosService } from './fetch-alunos.service';

describe('FetchAlunosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchAlunosService]
    });
  });

  it('should be created', inject([FetchAlunosService], (service: FetchAlunosService) => {
    expect(service).toBeTruthy();
  }));
});
