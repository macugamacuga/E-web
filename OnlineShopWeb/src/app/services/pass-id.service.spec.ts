import { TestBed } from '@angular/core/testing';

import { PassIDService } from './pass-id.service';

describe('PassIDService', () => {
  let service: PassIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
