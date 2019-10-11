import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

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

  private user: User = new User();

  ngOnInit() {
    this.user.system = '7073786578679736000';
  }

  logar() {
    this.service.fazerLogin(this.user).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      },
      () => { }
    );
  }

}
