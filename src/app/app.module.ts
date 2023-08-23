import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './authorization/components/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
