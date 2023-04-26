import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionCommentariesComponent } from './discussion-commentaries.component';

describe('DiscussionCommentariesComponent', () => {
  let component: DiscussionCommentariesComponent;
  let fixture: ComponentFixture<DiscussionCommentariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionCommentariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionCommentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
