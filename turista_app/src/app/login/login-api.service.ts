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
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';
  private url_add_turist: String = '/utilizadores/add_to_turist_role';
  private url_login: String = '/utilizadores/login/';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) {}

  public criaContaGoogle(
    name: String,
    dob: String,
    phone: String,
    address: String,
    postal: String,
    gender: String,
    city: String,
    email: String,
    pass: String
  ): void {
    let postData = {
      password: pass,
      login_type: '1',
    };

    this.http.post(environment.apiUrl + this.url, postData).subscribe(
      (data) => {
        console.log(data['iduser']);

        let id_user = data['iduser'];

        let postRoles = {
          user_iduser: id_user,
          roles_id_roles: 0,
        };
        //guarda em user_roles
        this.http
          .post(environment.apiUrl + this.url_add_turist, postRoles)
          .subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );

        let postDataInfo = {
          user_iduser: id_user,
          email: email,
          name: name,
          dob: dob,
          city: city,
          gender: gender,
          phone_number: phone,
          adress: address,
          postal_code: postal,
        };
        //guardar em userInfo
        this.http
          .post(environment.apiUrl + this.url_info, postDataInfo)
          .subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/menu']);
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public login_normal(email: String, password: String) {
    let data = {
      email: email,
      password: password,
    };

    this.http.post(environment.apiUrl + this.url_login, data).subscribe(
      (data) => {
        localStorage.setItem('id', data['user_iduser']); // guarda o id do user
        localStorage.setItem('email', data['email']); // guarda o id do user
        this.router.navigate(['/menu']);
      },
      (erro) => {
        this.showAlert();
      }
    );
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciais Invalidas',
      message: 'Repita Novamente o Formulario',
      buttons: ['Tentar de Novo'],
    });

    await alert.present();
  }
}
