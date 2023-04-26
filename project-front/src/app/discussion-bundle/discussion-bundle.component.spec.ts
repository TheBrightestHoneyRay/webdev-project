import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionBundleComponent } from './discussion-bundle.component';

describe('DiscussionBundleComponent', () => {
  let component: DiscussionBundleComponent;
  let fixture: ComponentFixture<DiscussionBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionBundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
