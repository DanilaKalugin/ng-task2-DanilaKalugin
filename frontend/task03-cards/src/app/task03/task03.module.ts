import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task03Component } from './task03.component';
import { Task03AddModule } from '../task03-add/task03-add.module';
import { Task03CardsListModule } from '../task03-cards-list/task03-cards-list.module';
import { Task03CardModule } from '../task03-card/task03-card.module';


@NgModule({
  declarations: [
    Task03Component
  ],
  imports: [
    CommonModule,
    Task03AddModule,
    Task03CardsListModule,
    Task03CardModule
  ],
  exports: [
    Task03Component
  ]
})
export class Task03Module { }
