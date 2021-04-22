import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriaContaPageRoutingModule } from './cria-conta-routing.module';

import { CriaContaPage } from './cria-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriaContaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CriaContaPage],
})
export class CriaContaPageModule {}
