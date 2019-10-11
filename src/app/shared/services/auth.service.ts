import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  fazerLogin(user: User) {
    return this.http.post('', user).pipe(take(1));
  }
  
}
