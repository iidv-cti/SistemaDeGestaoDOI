import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artigo } from '../models/Artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  artigosUrl = "http://localhost:8080/artigos";

  constructor(private http: HttpClient) { }

  getArtigos(){
    return this.http.get<Artigo[]>(this.artigosUrl);
  }
}
