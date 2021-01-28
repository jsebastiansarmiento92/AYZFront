import { TestBed } from '@angular/core/testing';

import { GrupoAreasService } from './grupo-areas.service';

describe('GrupoAreasService', () => {
  let service: GrupoAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
