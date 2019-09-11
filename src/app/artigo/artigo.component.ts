import { Component, OnInit } from '@angular/core';
import { ArtigoService } from './artigo.service';
import { Artigo } from '../models/Artigo';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  artigos$: Artigo[];

  constructor(private artigoService: ArtigoService) { }

  ngOnInit() {
    this.artigoService.getArtigos().subscribe((data) => this.artigos$ = data);
  }

}
