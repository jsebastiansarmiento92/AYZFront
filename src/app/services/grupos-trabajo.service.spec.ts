import { TestBed } from '@angular/core/testing';

import { GruposTrabajoService } from './grupos-trabajo.service';

describe('GruposTrabajoService', () => {
  let service: GruposTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
