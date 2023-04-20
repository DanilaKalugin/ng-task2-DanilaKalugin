import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task03Module } from './task03/task03.module';
import { ICardApiServiceToken } from './shared/interfaces/ICardApiService';
import { CardApiService } from './shared/services/card-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Task03Module,
    HttpClientModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
