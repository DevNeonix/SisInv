import { TestBed, inject } from '@angular/core/testing';

import { CondicionesService } from './condiciones.service';

describe('CondicionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CondicionesService]
    });
  });

  it('should be created', inject([CondicionesService], (service: CondicionesService) => {
    expect(service).toBeTruthy();
  }));
});
