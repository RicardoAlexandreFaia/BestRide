import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class RecuperaContaApiService {
    private url: String = '/utilizadores/';
    private url_info: String = '/utilizadoresInfo/';

    constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

    public recuperarConta(
        email: String,
      ) {
        this.http
      .get(environment.apiUrl + this.url + email)
      .subscribe(
        (data) => {
          //enviar email automatico com o random codigo e usar o local data ou a DB para guardar codigo
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