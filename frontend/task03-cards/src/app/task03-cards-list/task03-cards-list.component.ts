import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../shared/models/Card';
import { OpenCardLoaderService } from '../shared/services/open-card-loader.service';

@Component({
  selector: 'app-task03-cards-list',
  templateUrl: './task03-cards-list.component.html',
  styleUrls: ['./task03-cards-list.component.scss'],
})
export class Task03CardsListComponent implements OnInit {
  @Input()
  cards!: Card[];

  selectedItems: string[] = [];
  animationInProgress!: boolean;

  allSelected: boolean = false;

  @Output()
  cardRemoved = new EventEmitter<Card>();

  constructor(public openCardLoaderService: OpenCardLoaderService) {}

  ngOnInit(): void {
    this.selectedItems = this.openCardLoaderService.loadOpenedCards() || [];
  }

  changeFlippedCard(cardId: string) {
    if (this.selectedItems.includes(cardId)) {
      this.selectedItems = this.selectedItems.filter((id) => id !== cardId);
    } else {
      this.selectedItems.push(cardId);
    }

    this.openCardLoaderService.saveOpenCards(this.selectedItems);

    this.animationInProgress = true;
    setTimeout(() => {
      this.animationInProgress = false;
    }, 3000);
  }

  openAllCards() {
    this.allSelected = !this.allSelected;

    this.openCardLoaderService.saveOpenCards(
      this.allSelected ? this.cards.map((card) => card.id!) : []
    );
  }

  removeCard(card: Card) {
    this.selectedItems = this.selectedItems.filter((id) => id !== card.id);
    this.openCardLoaderService.saveOpenCards(this.selectedItems);
    this.cardRemoved.emit(card);
  }
}
