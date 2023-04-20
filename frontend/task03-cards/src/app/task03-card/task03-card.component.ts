import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../shared/models/Card';

@Component({
  selector: 'app-task03-card',
  templateUrl: './task03-card.component.html',
  styleUrls: ['./task03-card.component.scss'],
})
export class Task03CardComponent implements OnInit {
  private animationInProgress = false;

  @Input()
  term!: Card;

  @Input()
  index!: number;

  @Input()
  isFlipped!: boolean;

  @Input()
  animationIsActive!: boolean;

  @Output()
  flipCard = new EventEmitter<string>();

  @Output()
  removeCard = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    if (this.animationIsActive) {
      return;
    }
    this.flipCard.emit(this.term.id);
  }

  remove(): void {
    this.removeCard.emit(this.term);
  }
}
