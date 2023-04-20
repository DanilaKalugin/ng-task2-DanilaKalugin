import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task03CardsListComponent } from './task03-cards-list.component';
import { Task03CardModule } from '../task03-card/task03-card.module';



@NgModule({
  declarations: [
    Task03CardsListComponent
  ],
  imports: [
    CommonModule,
    Task03CardModule
  ],
  exports: [
    Task03CardsListComponent
  ]
})
export class Task03CardsListModule { }
