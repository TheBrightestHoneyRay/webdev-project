import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomicsListComponent } from './mycomics-list.component';

describe('MycomicsListComponent', () => {
  let component: MycomicsListComponent;
  let fixture: ComponentFixture<MycomicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomicsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycomicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
