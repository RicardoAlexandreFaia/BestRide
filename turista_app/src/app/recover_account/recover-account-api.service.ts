import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class RecuperaContaApiService {
  private url: String = '/users/';
  private url_info: String = '/userInfo/';
  private recover_alert_text = {};

  public language: string = this.trans.currentLang;

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private trans: TranslateService
  ) {
    this.trans.get('recover_account').subscribe((data) => {
      this.recover_alert_text = {
        header: data['header'],
        message: data['message'],
        buttons: data['buttons'][0],
      };
    });
  }

  public recuperarConta(email: String) {
    this.http.get(environment.apiUrl + this.url + email).subscribe(
      (data) => {
        //enviar email automatico com o random codigo e usar o local data ou a DB para guardar codigo
      },
      (erro) => {
        this.showAlert();
      }
    );
  }

  private gerarCodigoRandom() {
    return (
      Math.floor(Math.random() * (Math.floor(99999) - Math.ceil(10000))) +
      Math.ceil(10000)
    );
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: '' + this.recover_alert_text['header'],
      message: '' + this.recover_alert_text['message'],
      buttons: ['' + this.recover_alert_text['buttons']],
    });

    await alert.present();
  }
}
