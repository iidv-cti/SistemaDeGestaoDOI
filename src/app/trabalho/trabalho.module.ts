import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhoRoutingModule } from './trabalho-routing.module';
import { TrabalhoComponent } from './trabalho.component';
import { TrabalhoDetailComponent } from './trabalho-detail/trabalho-detail.component';
import { TrabalhoService } from './trabalho.service';

@NgModule({
  declarations: [TrabalhoComponent, TrabalhoDetailComponent],
  imports: [
  CommonModule,
    TrabalhoRoutingModule,
  ],
  providers: [TrabalhoService]
})
export class TrabalhoModule { }
