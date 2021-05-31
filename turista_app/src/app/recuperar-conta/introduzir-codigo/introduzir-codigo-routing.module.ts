import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduzirCodigoPage } from './introduzir-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduzirCodigoPage
  },  {
    path: 'reset-password-modal',
    loadChildren: () => import('./reset-password-modal/reset-password-modal.module').then( m => m.ResetPasswordModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduzirCodigoPageRoutingModule {}
