import { Injectable } from '@angular/core';
import {BlinkitHttpService} from './blinkit-http.service';
import {LoginAuthRequestInterface} from '../interfaces/loginAuthRequestInterface';
import {Observable} from 'rxjs';
import {AuthResponseInterface} from '../interfaces/authResponseInterface';
import {RegisterAuthRequestInterface} from '../interfaces/registerAuthRequestInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInUrl = '/user/login/';
  registerUrl = '/user/register/';

  constructor(private http: BlinkitHttpService) { }

  doLogIn(authData: LoginAuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post(this.logInUrl, authData);
  }

  doRegister(authData: RegisterAuthRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post(this.registerUrl, authData);
  }

}
