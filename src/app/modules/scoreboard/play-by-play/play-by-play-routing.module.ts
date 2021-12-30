import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayByPlayPage } from './play-by-play.page';

const routes: Routes = [
  {
    path: '',
    component: PlayByPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayByPlayPageRoutingModule {}
