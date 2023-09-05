import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './authorization/components/login-form/login-form.component';
import { DashboardComponent } from './feature/dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
