import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  user$: User;

  ngOnInit() {}

  logar(){
    this.service.fazerLogin().subscribe((data) => this.user$ = data);
  }

}
