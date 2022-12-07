import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Criarplano2PageRoutingModule } from './criarplano2-routing.module';

import { Criarplano2Page } from './criarplano2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Criarplano2PageRoutingModule
  ],
  declarations: [Criarplano2Page]
})
export class Criarplano2PageModule {}
