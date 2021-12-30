import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxScorePage } from './box-score.page';

const routes: Routes = [
  {
    path: '',
    component: BoxScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxScorePageRoutingModule {}
