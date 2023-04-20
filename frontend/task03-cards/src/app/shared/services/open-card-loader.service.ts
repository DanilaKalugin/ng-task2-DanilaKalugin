import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenCardLoaderService {

  constructor() { }

  saveOpenCards(ids: string[]) {
    localStorage.setItem('openCards', JSON.stringify(ids));
  }

  loadOpenedCards(): string[] {
    let res = localStorage.getItem('openCards');
    return JSON.parse(res!);
  }
}
