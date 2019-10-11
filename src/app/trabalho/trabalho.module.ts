import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhoRoutingModule } from './trabalho-routing.module';
import { TrabalhoComponent } from './trabalho.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [TrabalhoComponent],
  imports: [
    CommonModule,
    TrabalhoRoutingModule,
    RouterOutlet
  ]
})
export class TrabalhoModule { }
