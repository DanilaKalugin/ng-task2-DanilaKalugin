import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task03CardsListComponent } from './task03-cards-list.component';

describe('Task03CardsListComponent', () => {
  let component: Task03CardsListComponent;
  let fixture: ComponentFixture<Task03CardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task03CardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task03CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
