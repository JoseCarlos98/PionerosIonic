import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastMovementsPageRoutingModule } from './last-movements-routing.module';

import { LastMovementsPage } from './last-movements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastMovementsPageRoutingModule
  ],
  declarations: [LastMovementsPage]
})
export class LastMovementsPageModule {}
