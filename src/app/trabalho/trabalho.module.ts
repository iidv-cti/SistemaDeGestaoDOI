import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhoRoutingModule } from './trabalho-routing.module';
import { TrabalhoComponent } from './trabalho.component';

@NgModule({
  declarations: [TrabalhoComponent],
  imports: [
    CommonModule,
    TrabalhoRoutingModule,
    
  ]
})
export class TrabalhoModule { }
