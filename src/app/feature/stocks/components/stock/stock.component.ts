import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FullStockInfo } from '../../models/full-stock-info';
import { StocksService } from '../../services/stocks.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  constructor(private stocksService: StocksService, private router: Router) {}
  stock: FullStockInfo[] = [];

  createStockForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.maxLength(70)]),
    address: new FormControl('', Validators.required),
  });

  public backToStocks() {
    this.router.navigateByUrl('stocks');
    console.log('Вы вернулись в список складов');
  }

  public saveStock() {
    const newStock = this.createStockForm.value as FullStockInfo;
    if (newStock.id === null) {
      newStock.id = uuid.v4();
    }
    console.log('Этот склад сохранен', newStock);
    this.stocksService.createStock(newStock).subscribe();
  }
}
