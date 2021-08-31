import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
declare var Stripe;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private stripe = Stripe('pk_test_lLS9sEmL8to3FXiLDVSCW4rZ');
  private card: any;
  public currencyIcon: string = 'logo-euro';
  public paymentAmount: number = 220;

  constructor(
    private comp: AppComponent,
    private modalCtrl: ModalController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.comp.hide_tab = true;
    this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', (event) => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);

      this.stripe.createSource(this.card).then((result) => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.showMessageToast('Your Payment was concluded !!');
        }
      });
    });
  }

  async showMessageToast(msg: string) {
    const toast = await this.toast.create({
      message: '' + msg,
      duration: 2000,
    });
    toast.present();
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
