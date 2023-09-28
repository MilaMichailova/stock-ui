import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ShortStockInfo } from '../models/short-stock-info';
import { FullStockInfo } from '../models/full-stock-info';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<ShortStockInfo[]> {
    return this.http.get<ShortStockInfo[]>('https://localhost:7119/api/stock');
  }

  createStock(stock: FullStockInfo): Observable<any> {
    return this.http.post('https://localhost:7119/api/stock', stock);
  }
}
