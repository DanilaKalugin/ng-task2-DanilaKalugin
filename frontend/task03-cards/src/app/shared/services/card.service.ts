import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/Card';
import {
  ICardApiService,
  ICardApiServiceToken,
} from '../interfaces/ICardApiService';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards: Card[] = [];

  get cards(): Card[] {
    return this._cards;
  }

  constructor(
    @Inject(ICardApiServiceToken) public cardService: ICardApiService
  ) {}

  initialize(): void {
    this.cardService.getAll().subscribe((cards) => {this._cards = cards;});
  }

  delete(card: Card) {
    this.cardService.delete(card.id!).subscribe(() => this.initialize());
  }

  addCard(card: Card): void {
    this.cardService.add(card).subscribe(() => {
      this.initialize();
    });
  }
}
