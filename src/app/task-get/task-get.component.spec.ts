import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGetComponent } from './task-get.component';

describe('TaskGetComponent', () => {
  let component: TaskGetComponent;
  let fixture: ComponentFixture<TaskGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
