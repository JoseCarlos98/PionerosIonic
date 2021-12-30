import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShotChartPageRoutingModule } from './shot-chart-routing.module';

import { ShotChartPage } from './shot-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShotChartPageRoutingModule
  ],
  declarations: [ShotChartPage]
})
export class ShotChartPageModule {}
