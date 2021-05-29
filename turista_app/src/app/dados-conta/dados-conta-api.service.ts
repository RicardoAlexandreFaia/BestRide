import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';

  public email_get: string;

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private nativeStorage: NativeStorage,
    public alertController: AlertController
  ) {
    var id = localStorage.getItem('id');
    this.http.get(environment.apiUrl + this.url_info + id).subscribe((data) => {
      console.log(data);
      this.name = data['name'];
      this.email = data['email'];
      this.city = data['city'];
      this.phone = data['phone_number'];
      this.address = data['adress'];
      this.postal = data['postal_code'];

      this.http
        .get(environment.apiUrl + this.url + id)
        .subscribe((data_user) => {
          //console.log(data_user);
        });
    });
  }

  ngOnInit() {}

  public atualizaPassword(pass: string) {
    var id = localStorage.getItem('id');
    var data = {
      password: pass,
    };
    this.http
      .put(environment.apiUrl + this.url + id + '/', data)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }

  public atualizaCampos(
    name: string,
    email: string,
    city: string,
    phone: string,
    address: string,
    postal: string
  ) {
    console.log(name);
    console.log(city);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(postal);

    var id = localStorage.getItem('id');
    var data = {
      email: email,
      name: name,
      city: city,
      phone_number: phone,
      adress: address,
      postal_code: postal,
      user_iduser: id,
    };

    this.http
      .put(environment.apiUrl + this.url_info + id, data)
      .subscribe((resposta) => {
        console.log(resposta);

        if (localStorage.getItem('lang') == 'pt') {
          this.presentAlert('Sucesso', 'Os campos foram alterados!');
        } else if (localStorage.getItem('lang') == 'en') {
          this.presentAlert('Sucess', 'Fields have been changed!');
        }
      });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
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
}
