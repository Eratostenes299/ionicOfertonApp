import { TestBed } from '@angular/core/testing';

import { AnunciosServicesService } from './anuncios-services.service';

describe('AnunciosServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnunciosServicesService = TestBed.get(AnunciosServicesService);
    expect(service).toBeTruthy();
  });
});
