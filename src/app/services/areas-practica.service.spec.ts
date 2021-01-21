import { TestBed } from '@angular/core/testing';

import { AreasPracticaService } from './areas-practica.service';

describe('AreasPracticaService', () => {
  let service: AreasPracticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasPracticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
