import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStocksInfo } from '../models/stocks-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetStocksService {
  constructor(private http: HttpClient) {}
  getStocks(stockInfo: IStocksInfo): Observable<Object> {
    return this.http.get('https://localhost:7119/api/stock');
  }
}
