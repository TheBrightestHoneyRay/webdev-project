import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMainActivityComponent } from './site-main-activity.component';

describe('SiteMainActivityComponent', () => {
  let component: SiteMainActivityComponent;
  let fixture: ComponentFixture<SiteMainActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMainActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMainActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
