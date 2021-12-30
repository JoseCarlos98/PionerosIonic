import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxScorePage } from './box-score/box-score.page';
import { PruebaComponent } from './prueba/prueba.component';

import { ScoreboardPage } from './scoreboard.page';
import { BoxScoreCComponent } from './box-score-c/box-score-c.component';
import { ShotChartCComponent } from './shot-chart-c/shot-chart-c.component';
import { PlayByPlayCComponent } from './play-by-play-c/play-by-play-c.component';

const routes: Routes = [
  {
    path: '',
    component: ScoreboardPage,
    children:[
      {path:'box-score', component: BoxScoreCComponent},
      {path:'play-by-play', component: PlayByPlayCComponent},
      {path:'shot-chart', component: ShotChartCComponent},
    ]
  },
  // {
  //   path: 'box-score',
  //   loadChildren: () => import('./box-score/box-score.module').then( m => m.BoxScorePageModule)
  // },
  // {
  //   path: 'play-by-play',
  //   loadChildren: () => import('./play-by-play/play-by-play.module').then( m => m.PlayByPlayPageModule)
  // },
  // {
  //   path: 'shot-chart',
  //   loadChildren: () => import('./shot-chart/shot-chart.module').then( m => m.ShotChartPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreboardPageRoutingModule {}
