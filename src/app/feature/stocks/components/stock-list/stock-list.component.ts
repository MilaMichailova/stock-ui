import { Component, OnInit } from '@angular/core';
import { IStocksInfo } from 'src/app/feature/models/stocks-info';
import { GetStocksService } from 'src/app/feature/services/get.stocks.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  constructor(private stocksService: GetStocksService) {}
  stock: IStocksInfo;

  ngOnInit(): void {
    this.stocksService
      .getStocks()
      .subscribe({ next: (data: any) => (this.stock = data['name']) });
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
