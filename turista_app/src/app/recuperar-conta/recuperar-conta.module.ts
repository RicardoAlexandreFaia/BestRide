import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarContaPageRoutingModule } from './recuperar-conta-routing.module';

import { RecuperarContaPage } from './recuperar-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [RecuperarContaPage],
})
export class RecuperarContaPageModule {}
