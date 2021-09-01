import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentPage } from './payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    SharedModule,
  ],
  declarations: [PaymentPage],
})
export class PaymentPageModule {}
