import { TestBed, inject } from '@angular/core/testing';

import { UbicacionesService } from './ubicaciones.service';

describe('UbicacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UbicacionesService]
    });
  });

  it('should be created', inject([UbicacionesService], (service: UbicacionesService) => {
    expect(service).toBeTruthy();
  }));
});
