import { TestBed } from '@angular/core/testing';

import { GeneradorProductosService } from './generador-productos.service';

describe('GeneradorProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorProductosService = TestBed.get(GeneradorProductosService);
    expect(service).toBeTruthy();
  });
});
