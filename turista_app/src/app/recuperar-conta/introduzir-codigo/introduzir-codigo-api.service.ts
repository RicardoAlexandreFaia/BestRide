import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class IntroduzirCodigoApiService {
    private url_recuperar: String = '/recuperar_conta/';

    constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

    public recuperarConta(
        code: Number,
      ) {
        this.http
      .get(environment.apiUrl + this.url_recuperar + code)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (erro) => {
          this.showAlert();
        }
      );
    }

    async showAlert() {
        const alert = await this.alertController.create({
          header: 'Código errado',
          message: 'Introduza Novamente',
          buttons: ['Tentar de Novo'],
        });
    
        await alert.present();
    }
}