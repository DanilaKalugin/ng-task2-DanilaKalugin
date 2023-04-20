import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task03Module } from './task03/task03.module';
import { Task03CardsListComponent } from './task03-cards-list/task03-cards-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Task03Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
