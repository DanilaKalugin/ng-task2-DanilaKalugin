import { Injectable } from '@angular/core';
import { ICardApiService } from '../interfaces/ICardApiService';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';
import { HttpClient } from "@angular/common/http";

const url = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CardApiService implements ICardApiService {

  constructor(private httpClient: HttpClient) { }
  add(card: Card): Observable<void> {
    return this.httpClient.post<void>(url, card);
  }
  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(url);
  }
  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${url}/${id}`);
  }
}
