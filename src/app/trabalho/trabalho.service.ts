import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { api } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class TrabalhoService {

  constructor(
    private http: HttpClient
  ) { }

  getTrabalhos() {
    return this.http.get(api).pipe(take(1));
  }
}
