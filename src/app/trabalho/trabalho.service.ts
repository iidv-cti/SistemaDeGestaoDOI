import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabalhoService {

  constructor(
    private http: HttpClient
  ) { }

  getTrabalhos() {
    return this.http.get('').pipe(take(1));
  }
}
