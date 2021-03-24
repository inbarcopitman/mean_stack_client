import { TestBed, inject } from '@angular/core/testing';

import { UsersUtilsService } from './users-utils.service';

describe('UsersUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersUtilsService]
    });
  });

  it('should be created', inject([UsersUtilsService], (service: UsersUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
