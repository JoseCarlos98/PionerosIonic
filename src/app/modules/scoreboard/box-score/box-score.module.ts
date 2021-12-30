import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxScorePageRoutingModule } from './box-score-routing.module';

import { BoxScorePage } from './box-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxScorePageRoutingModule
  ],
  declarations: [BoxScorePage]
})
export class BoxScorePageModule {}
