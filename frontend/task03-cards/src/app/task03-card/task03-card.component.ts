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
  flipCard = new EventEmitter<number>();

  @Output()
  removeCard = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    if (this.animationIsActive) {
      return;
    }

    if (!this.isFlipped) {
      this.flipCard.emit(this.index);
    } else {
      this.flipCard.emit(-1);
    }
  }

  remove(): void {
    this.removeCard.emit(this.term);
  }
}
