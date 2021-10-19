import { TestBed } from '@angular/core/testing';

import { BasicsService } from './basics.service';

describe('BasicsService', () => {
  let service: BasicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
