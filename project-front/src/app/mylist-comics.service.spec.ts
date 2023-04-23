import { TestBed } from '@angular/core/testing';

import { MylistComicsService } from './mylist-comics.service';

describe('MylistComicsService', () => {
  let service: MylistComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylistComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
