import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  //endpoint da Api
  private url: String = '/users/';
  private url_info: String = '/userInfo/';
  private url_add_turist: String = '/userInfo/add_to_turist_role';
  private url_login: String = '/login/';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) {}

  public login_user(email: String, password: String, login_automatic: Boolean) {
    let data = {
      email: email,
      password: password,
    };

    this.http.post(environment.apiUrl + this.url_login, data).subscribe(
      (data) => {
        localStorage.setItem(
          'token',
          data['AuthenticationResult']['AccessToken']
        );

        //Login made it !!

        if (login_automatic) {
          localStorage.setItem('automatic_login', 'true');
        }

        this.router.navigate(['/home_tab']);
      },
      (error) => {
        this.showAlert('Invalid Credentials', error['error'], 'Try Again');
      }
    );
  }

  public social_sign_in(code: string) {
    const post_url =
      'https://bestride.auth.eu-west-2.amazoncognito.com/oauth2/token';

    const head = {
      'Access-Control-Allow-Origin': '' + environment.redirect_uri,
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const result = this.http
      .post(
        post_url,
        {
          grant_type: 'authorization_code',
          client_id: environment.aws_client_id,
          redirect_uri: environment.redirect_uri,
          code: code,
        },
        { headers: head }
      )
      .subscribe((elem) => {
        return elem;
      });

    console.log(result);
  }

  async showAlert(header: string, message: string, button_text: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [button_text],
    });

    await alert.present();
  }
}
