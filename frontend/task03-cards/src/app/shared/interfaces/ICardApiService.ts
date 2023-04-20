import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { Card } from "../models/Card";

export const ICardApiServiceToken = new InjectionToken('ICardApiServiceToken');

export interface ICardApiService {
    add(card: Card): Observable<void>;
    getAll(): Observable<Card[]>;
    delete(id: string): Observable<void>;
}