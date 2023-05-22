import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/Card';

let data: Card[] = [{
  title: '1',
  description: '1',
},
{
  title: '2',
  description: '2',
}]

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.scss'],
})
export class Task03Component implements OnInit {
  cardList: Card[];

  constructor() {
    this.cardList = data;
  }

  ngOnInit(): void { 
   
  }

  addCard(card: Card) {
    this.cardList.push(card)
  }

  removeCard(card: Card) {
    const index = this.cardList.indexOf(card);
    this.cardList.splice(index, 1);
  }
}
