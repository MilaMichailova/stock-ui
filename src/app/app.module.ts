import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationModule } from './authorization/authorization.module';
import { StocksModule } from './feature/stocks/stocks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationModule,
    HttpClientModule,
    StocksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
