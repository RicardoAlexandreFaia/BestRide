import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroduzirCodigoPageRoutingModule } from './introduzir-codigo-routing.module';

import { IntroduzirCodigoPage } from './introduzir-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroduzirCodigoPageRoutingModule
  ],
  declarations: [IntroduzirCodigoPage]
})
export class IntroduzirCodigoPageModule {}
