import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task03AddComponent } from './task03-add.component';

describe('Task03AddComponent', () => {
  let component: Task03AddComponent;
  let fixture: ComponentFixture<Task03AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task03AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task03AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
