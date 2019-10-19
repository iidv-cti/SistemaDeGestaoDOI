import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private service: AdminService
  ) { }

  ngOnInit() {
    
  }

}
