import { TestBed } from '@angular/core/testing';

import { SharedNameService } from './shared-name.service';

describe('SharedNameService', () => {
  let service: SharedNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
