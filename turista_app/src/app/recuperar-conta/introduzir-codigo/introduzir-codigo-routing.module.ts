import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduzirCodigoPage } from './introduzir-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduzirCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduzirCodigoPageRoutingModule {}
