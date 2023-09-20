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
  stocks: ShortStockInfo[];

  ngOnInit(): void {
    this.stocksService.getStocks().subscribe((result) => {
      this.stocks = result;
    });
  }

  // я не помню как тут это делать то что выше. блин...

  // stocks = [
  //   {
  //     name: 'Склад 1',
  //   },
  //   {
  //     name: 'Склад 2',
  //   },
  //   {
  //     name: 'Склад 3',
  //   },
  //   {
  //     name: 'Склад 4',
  //   },
  //   {
  //     name: 'Склад 5',
  //   },
  // ];
}
