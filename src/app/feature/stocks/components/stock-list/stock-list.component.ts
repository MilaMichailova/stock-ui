import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { ShortStockInfo } from '../../models/short-stock-info';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  constructor(private stocksService: StocksService) {}
  stocks: ShortStockInfo[] = [];

  public get isStocksEmpty(): boolean {
    if (this.stocks.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  public createStock() {
    console.log('Создан новый склад для всяхой херни!');
  }

  ngOnInit(): void {
    this.stocksService.getStocks().subscribe((result) => {
      this.stocks = result;
      this.isStocksEmpty;
    });
  }
}
