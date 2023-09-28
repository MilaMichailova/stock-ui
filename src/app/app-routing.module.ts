import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './authorization/components/login-form/login-form.component';
import { DashboardComponent } from './feature/dashboard/components/dashboard/dashboard.component';
import { StockListComponent } from './feature/stocks/components/stock-list/stock-list.component';
import { StockComponent } from './feature/stocks/components/stock/stock.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks', component: StockListComponent },
  { path: 'stock/create', component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
