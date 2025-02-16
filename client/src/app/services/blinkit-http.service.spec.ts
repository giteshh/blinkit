import { TestBed } from '@angular/core/testing';

import { BlinkitHttpService } from './blinkit-http.service';

describe('BlinkitHttpService', () => {
  let service: BlinkitHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlinkitHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
