import { Component, OnInit } from '@angular/core';
import { TrabalhoService } from './trabalho.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {
  trabalhos$;
  erros$;
  
  constructor(
    private service: TrabalhoService
  ) { }

  ngOnInit() {
    this.trabalhos$ = this.service.getTrabalhos().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {}
    )
  }


}
