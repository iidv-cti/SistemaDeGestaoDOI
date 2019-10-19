import { Component, OnInit } from "@angular/core";
import { TrabalhoService } from "./trabalho.service";
import { Observable } from "rxjs";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-trabalho",
  templateUrl: "./trabalho.component.html",
  styleUrls: ["./trabalho.component.css"]
})
export class TrabalhoComponent implements OnInit {
  trabalhos;
  erros$;
  page: number = 0;
  isLast: boolean = false;
  isFirst: boolean = true;
  constructor(private service: TrabalhoService) {}

  nextPage() {
    if (!this.isLast) {
      this.page++;
      this.loadTrabalhos();
    }
  }

  prevPage() {
    if (!this.isFirst) {
      this.page--;
      this.loadTrabalhos();
    }
  }

  loadTrabalhos() {
    console.log("Primeira: " + this.isFirst);
    console.log("Ultima:" + this.isLast);
    this.service.getTrabalhos(this.page)
      .subscribe(res => {
        this.isFirst = res['first'];
        this.isLast = res['last'];
        this.trabalhos = res['content'];
      },
      err => {
        console.log(err);
      },
      () => {}
      );
  }

  ngOnInit() {
    this.loadTrabalhos();
  }
}
