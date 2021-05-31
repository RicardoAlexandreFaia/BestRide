import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class RecuperaContaApiService {
    private code: Number = this.gerarCodigoRandom();
    private url: String = '/recuperarConta/';
    private url_recuperacao: String = '/recuperarConta/recuperacao';

    constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

    public recuperarConta(
        email: String,
      ) {
        let postData = {
          email : email,
          code: this.code,
        };

        this.http.post(environment.apiUrl + this.url, postData).subscribe(
          (data) => {
            console.log(data);
            this.http.post(environment.apiUrl + this.url_recuperacao, postData).subscribe(
              (data) => {
                console.log(data);
              },
              (error) => {
                this.showAlert();
              }
            );
          },
          (error) => {
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