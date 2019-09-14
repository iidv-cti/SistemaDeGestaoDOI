import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { tap, delay, take } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: any = 'https://api.institutoidv.org/api/v1.0/users/verificarLogin';

  constructor(private http: HttpClient) { }
  // Chamar a api para login de usuario
  fazerLogin(user) {
    return this.http.get(this.loginUrl, user).pipe(take(1));
  } 
}
