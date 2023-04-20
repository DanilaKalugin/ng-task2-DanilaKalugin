import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/Card';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.scss'],
})
export class Task03Component implements OnInit {

  constructor(public cardService: CardService) {
   
  }

  ngOnInit(): void { 
    this.cardService.initialize();
  }

  addCard(card: Card) {
    this.cardService.addCard(card)
  }

  removeCard(card: Card) {
    this.cardService.delete(card)
  }
}
