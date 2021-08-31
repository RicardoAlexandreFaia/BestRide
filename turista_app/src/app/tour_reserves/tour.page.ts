import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { PaymentPage } from '../payment/payment.page';
import { Tour } from './tour';
import { TourApiService } from './tour-api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {
  public tour_array: Array<Tour>;

  constructor(
    private loadingCtrl: LoadingController,
    private tourAPI: TourApiService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading bookings...',
    });

    loading.present();
    console.log('reloading....');
    const userID = localStorage.getItem('userID');
    this.tour_array = this.tourAPI.getTravelsByUser('8');
    setTimeout(() => {
      loading.dismiss();
      console.log(this.tour_array);
    }, 5000);
  }

  async payment() {
    const modal = await this.modalController.create({
      component: PaymentPage,
    });
    modal.present();
  }
}
