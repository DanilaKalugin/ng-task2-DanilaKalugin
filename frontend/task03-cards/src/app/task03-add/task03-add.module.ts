import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task03AddComponent } from './task03-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Task03AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Task03AddComponent
  ]
})
export class Task03AddModule { }
