import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentTripPageRoutingModule } from './comment-trip-routing.module';

import { CommentTripPage } from './comment-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentTripPageRoutingModule
  ],
  declarations: [CommentTripPage]
})
export class CommentTripPageModule {}
