import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class IntroduzirCodigoApiService {
    private code: Number = this.gerarCodigoRandom();
    private url_recuperar: String = '/recuperar_conta/';

    constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

    public recuperarConta(
        code: Number,
      ) {
        this.http
      .get(environment.apiUrl + this.url_recuperar + this.code)
      .subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('email', data['email']);
        },
        (erro) => {
          this.showAlert();
        }
      );
    }

    private gerarCodigoRandom(){
        return Math.floor(Math.random() * (Math.floor(99999) - Math.ceil(10000))) + Math.ceil(10000);
    }

    async showAlert() {
        const alert = await this.alertController.create({
          header: 'E-mail Invalido',
          message: 'Introduza Novamente',
          buttons: ['Tentar de Novo'],
        });
    
        await alert.present();
    }
}