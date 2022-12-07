import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Criarplano2Page } from './criarplano2.page';

const routes: Routes = [
  {
    path: '',
    component: Criarplano2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Criarplano2PageRoutingModule {}
