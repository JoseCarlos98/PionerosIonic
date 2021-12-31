import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastMovementsPage } from './last-movements.page';

const routes: Routes = [
  {
    path: '',
    component: LastMovementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastMovementsPageRoutingModule {}
