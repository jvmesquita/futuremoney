import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarplanoPageRoutingModule } from './criarplano-routing.module';

import { CriarplanoPage } from './criarplano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarplanoPageRoutingModule
  ],
  declarations: [CriarplanoPage]
})
export class CriarplanoPageModule {}
