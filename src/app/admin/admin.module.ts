import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [
    AdminService,
    AuthGuard
  ]
})
export class AdminModule { }
