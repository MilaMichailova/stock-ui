import { Injectable } from '@angular/core';
import { ILoginInfo } from '../models/login-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginInfo: ILoginInfo): Observable<Object> {
    return this.http.post('https://localhost:7119/login', loginInfo);
  }
}
