import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'recuperar-conta',
    loadChildren: () =>
      import('./recuperar-conta/recuperar-conta.module').then(
        (m) => m.RecuperarContaPageModule
      ),
  },
  {
    path: 'splash-screen',
    loadChildren: () =>
      import('./splash-screen/splash-screen.module').then(
        (m) => m.SplashScreenPageModule
      ),
  },
  {
    path: 'cria-conta',
    loadChildren: () =>
      import('./cria-conta/cria-conta.module').then(
        (m) => m.CriaContaPageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'definicoes',
    loadChildren: () =>
      import('./definicoes/definicoes.module').then(
        (m) => m.DefinicoesPageModule
      ),
  },
  {
    path: 'calendario',
    loadChildren: () =>
      import('./calendario/calendario.module').then(
        (m) => m.CalendarioPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
