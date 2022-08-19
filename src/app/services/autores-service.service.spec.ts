import { TestBed } from '@angular/core/testing';

import { AutoresServiceService } from './autores-service.service';

describe('AutoresServiceService', () => {
  let service: AutoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
