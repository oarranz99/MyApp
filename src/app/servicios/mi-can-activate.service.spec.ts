import { TestBed } from '@angular/core/testing';

import { MiCanActivateService } from './mi-can-activate.service';

describe('MiCanActivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiCanActivateService = TestBed.get(MiCanActivateService);
    expect(service).toBeTruthy();
  });
});
