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

  getTrabalhos(page:number) {
    return this.http.get(api+`/trabalhos/page?page=${page}`).pipe(take(1));
  }

  getTrabalho(id:number) {
    return this.http.get(api+`/trabalhos/${id}`).pipe(take(1));
  }
}
