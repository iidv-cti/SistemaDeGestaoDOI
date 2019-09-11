import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: any = "https://localhost:8080/user";

  constructor(private http:HttpClient) { }
  
  // Chamar a api para login de usuario
  fazerLogin(){
    return this.http.get<User>(this.loginUrl);
  }  
}
