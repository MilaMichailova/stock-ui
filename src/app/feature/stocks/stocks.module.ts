import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockComponent } from './components/stock/stock.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockListComponent, StockComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class StocksModule {}
