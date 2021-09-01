import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tourBooking',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'recover_account',
    loadChildren: () =>
      import('./recover_account/recover-account.module').then(
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
    path: 'create_account',
    loadChildren: () =>
      import('./create_account/create-account.module').then(
        (m) => m.CriaContaPageModule
      ),
  },
  {
    path: 'home_tab',
    loadChildren: () =>
      import('./home_tab/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'definitions_tab',
    loadChildren: () =>
      import('./app_definitions/definitions.module').then(
        (m) => m.DefinicoesPageModule
      ),
  },
  {
    path: 'tourBooking',
    loadChildren: () =>
      import('./tour_reserves/tour.module').then((m) => m.TourPageModule),
  },
  {
    path: 'user_tab',
    loadChildren: () =>
      import('./user_tab/user-tab.module').then((m) => m.DadosContaPageModule),
  },
  {
    path: 'confirm-account',
    loadChildren: () =>
      import('./confirm-account/confirm-account.module').then(
        (m) => m.ConfirmAccountPageModule
      ),
  },
  {
    path: 'book-trip-modal',
    loadChildren: () =>
      import('./home_tab/book-trip-modal/book-trip-modal.module').then(
        (m) => m.BookTripModalPageModule
      ),
  },
  {
    path: 'options-map',
    loadChildren: () =>
      import('./home_tab/options-map/options-map.module').then(
        (m) => m.OptionsMapPageModule
      ),
  },
  {
    path: 'trip-details',
    loadChildren: () =>
      import('./home_tab/trip-details/trip-details.module').then(
        (m) => m.TripDetailsPageModule
      ),
  },
  {
    path: 'comment-trip',
    loadChildren: () =>
      import('./comment-trip/comment-trip.module').then(
        (m) => m.CommentTripPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
