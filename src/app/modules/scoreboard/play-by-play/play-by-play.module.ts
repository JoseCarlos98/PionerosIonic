import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayByPlayPageRoutingModule } from './play-by-play-routing.module';

import { PlayByPlayPage } from './play-by-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayByPlayPageRoutingModule
  ],
  declarations: [PlayByPlayPage]
})
export class PlayByPlayPageModule {}
