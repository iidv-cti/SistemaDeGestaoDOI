import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private service: AuthService,
    private router: Router
  ) { }
  erro: string;
  private user: User = new User();

  ngOnInit() {}

  onLogar() {
    this.service.fazerLogin(this.user)
      .subscribe(
        success => {
          this.service.setToken(success.headers.get('Authorization'));
          this.service.setAutenticado(true);
          this.router.navigate(['admin']);
        },
        error => {
          this.erro = error['error'];
          
        },
        () => { }
      );
  }

}
