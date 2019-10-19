import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhoComponent } from './trabalho.component';
import { TrabalhoDetailComponent } from './trabalho-detail/trabalho-detail.component';

const routes: Routes = [
  {path: '', component: TrabalhoComponent, children: [
    {path: ':id', component: TrabalhoDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class TrabalhoRoutingModule { }
