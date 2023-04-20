import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../shared/models/Card'



@Component({
  selector: 'app-task03-cards-list',
  templateUrl: './task03-cards-list.component.html',
  styleUrls: ['./task03-cards-list.component.scss']
})
export class Task03CardsListComponent implements OnInit {
  @Input()
  cards!: Card[];

  selectedItem: number = -1;
  animationInProgress!: boolean;

  cardsList!: Card[];

  @Output()
  cardRemoved = new EventEmitter<Card>();

  constructor() {
    
   }

  ngOnInit(): void {
    this.cardsList = this.cards;
  }

  changeFlippedCard(cardIndex: number) {
    this.selectedItem = cardIndex;
    
    this.animationInProgress = true;
    setTimeout(() => {
      this.animationInProgress = false;
    }, 3000);
  }

  removeCard(card: Card) {
    this.cardRemoved.emit(card);
  }
}
