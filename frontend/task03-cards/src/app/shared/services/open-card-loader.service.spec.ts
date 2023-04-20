import { TestBed } from '@angular/core/testing';

import { OpenCardLoaderService } from './open-card-loader.service';

describe('OpenCardLoaderService', () => {
  let service: OpenCardLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCardLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
