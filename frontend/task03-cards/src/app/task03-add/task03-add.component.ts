import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../shared/models/Card';

@Component({
  selector: 'app-task03-add',
  templateUrl: './task03-add.component.html',
  styleUrls: ['./task03-add.component.scss']
})
export class Task03AddComponent implements OnInit {

  @Output()
  add = new EventEmitter<Card>();

  form = new FormGroup({
    cardTitle: new FormControl(null),
    cardDescription: new FormControl(null)
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.add.emit({
      title: this.form.get('cardTitle')?.value,
      description: this.form.get('cardDescription')?.value
    })
    this.form.reset();
  }
}
