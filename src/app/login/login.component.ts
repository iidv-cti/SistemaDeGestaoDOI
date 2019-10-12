import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/User';

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

  ngOnInit() {}

  logar() {
    this.service.fazerLogin(this.user)
      .subscribe(
        success => {
          console.log(success.headers.get('Authorization'));
        },
        error => {
          console.log(error);
        },
        () => { }
      );
  }

}
