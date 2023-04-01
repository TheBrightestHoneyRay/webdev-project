import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedListComponent } from './authorized-list.component';

describe('AuthorizedListComponent', () => {
  let component: AuthorizedListComponent;
  let fixture: ComponentFixture<AuthorizedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
