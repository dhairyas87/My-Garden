import { TestBed } from '@angular/core/testing';

import { PlantServicesService } from './plant-services.service';

describe('PlantServicesService', () => {
  let service: PlantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
