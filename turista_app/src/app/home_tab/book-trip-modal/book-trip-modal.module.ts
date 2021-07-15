import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTripModalPageRoutingModule } from './book-trip-modal-routing.module';

import { BookTripModalPage } from './book-trip-modal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTripModalPageRoutingModule,
    SharedModule,
  ],
  declarations: [BookTripModalPage],
})
export class BookTripModalPageModule {}
