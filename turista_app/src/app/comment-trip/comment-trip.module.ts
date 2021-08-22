import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommentTripPageRoutingModule } from './comment-trip-routing.module';
import { CommentTripPage } from './comment-trip.page';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentTripPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CommentTripPage]
})
export class CommentTripPageModule {}
