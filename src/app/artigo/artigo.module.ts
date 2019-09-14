import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtigoComponent } from './artigo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArtigoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArtigoModule { }
