import { Component, OnInit } from '@angular/core';
import { TrabalhoService } from '../trabalho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trabalho } from '../../models/Trabalho';

@Component({
  selector: 'app-trabalho-detail',
  templateUrl: './trabalho-detail.component.html',
  styleUrls: ['./trabalho-detail.component.css']
})
export class TrabalhoDetailComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  trabalho: any;

  constructor(
    private service: TrabalhoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.service.getTrabalho(this.id).subscribe(
          res => {
            this.trabalho = res;
          },
          err => {
            console.log(err);
          },
          () => {}
        )
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
