import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task03CardComponent } from './task03-card.component';

describe('Task03CardComponent', () => {
  let component: Task03CardComponent;
  let fixture: ComponentFixture<Task03CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task03CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task03CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
