import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { User } from '../../models/User';
import { api } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private usuarioAutenticado: boolean = false;

  setToken(token) {
    this.token = token;
  }
  getToken() {
    return this.token;
  }
  constructor(
    private http: HttpClient
  ) { }

  fazerLogin(user: User) {
    return this.http.post(api+'/login', user, {
      observe: 'response',
      responseType: 'text'
    }).pipe(take(1));
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  setAutenticado(bool) {
    this.usuarioAutenticado = bool;
  }
  
}
