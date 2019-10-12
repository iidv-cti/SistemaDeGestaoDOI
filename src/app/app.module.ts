import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './shared/services/auth.service';
import { TrabalhoModule } from './trabalho/trabalho.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LoginModule,
    TrabalhoModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
