import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShotChartPage } from './shot-chart.page';

const routes: Routes = [
  {
    path: '',
    component: ShotChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShotChartPageRoutingModule {}
