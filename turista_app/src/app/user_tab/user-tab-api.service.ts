import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../user_tab/user';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
  private url: String = '/users/';
  private url_get_user: String = '/getUser/';

  public email_get: string;

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;
  public id = localStorage.getItem('id');
  private data_user_alert_text = {};

  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.user = new User('', '', '', '', '', '');
    this.ngOnInit();
  }

  ngOnInit() {
    this.getUser();
    let acessToken = localStorage.getItem('token');
    this.http
      .get(environment.apiUrl + this.url_get_user + acessToken)
      .subscribe((data) => {
        console.log(data);

        let phone = '' + data['UserAttributes'][7].Value;
        phone = phone.slice(3, 12);
        this.user = new User(
          data['UserAttributes'][5].Value,
          data['UserAttributes'][8].Value,
          phone,
          data['UserAttributes'][1].Value,
          data['UserAttributes'][5].Value,
          data['UserAttributes'][9].Value
        );
      });
  }

  public getUser(): User {
    return this.user;
  }

  public atualizaPassword(pass: string): void {
    let data = {
      password: pass,
    };
    this.http
      .put(environment.apiUrl + this.url + this.id + '/', data)
      .subscribe((resposta) => {
        console.log(resposta['UserAttributes']);
      });
  }

  public atualizaCampos(data_account): void {
    const data = {
      email: data_account['email'],
      name: data_account['name'],
      city: data_account['city'],
      phone_number: data_account['phone'],
      adress: data_account['address'],
      postal_code: data_account['postal'],
      user_iduser: this.id,
    };
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data_user_alert_text['header'],
      message: this.data_user_alert_text['message'],
      buttons: [this.data_user_alert_text['buttons']],
    });
    await alert.present();
  }

  public getInfo() {
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        data.toString();
      },
      (erro) => {}
    );
  }

  public eliminaContaUserInfo(): void {
    const email = localStorage.getItem('email');
    const url_info_delete: String = '/userInfo/deleteAccount';

    let postData = {
      email: email,
    };

    this.http
      .post(environment.apiUrl + url_info_delete, postData)
      .subscribe((resposta) => {});
  }

  public eliminaContaUser(): void {
    const id = localStorage.getItem('id');
    const url_delete: String = '/users/deleteAccount';

    let postData = {
      id: id,
    };

    this.http
      .post(environment.apiUrl + url_delete, postData)
      .subscribe((resposta) => {});
  }
}
