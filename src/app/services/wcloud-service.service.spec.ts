import { TestBed } from '@angular/core/testing';

import { WcloudServiceService } from './wcloud-service.service';

describe('WcloudServiceService', () => {
  let service: WcloudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcloudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
