import { TestBed } from '@angular/core/testing';

import { SelectedActivitiesService } from './selected-activities.service';

describe('SelectedActivitiesService', () => {
  let service: SelectedActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
