import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarplanoPage } from './criarplano.page';

const routes: Routes = [
  {
    path: '',
    component: CriarplanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarplanoPageRoutingModule {}
