import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DadosContaApiService } from './dados-conta-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  language: string = this.translateService.currentLang;
  showPass = false;
  passwordIconToggle = 'eye';
  email_get: String;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private dadosContaApi: DadosContaApiService,
    public alertController: AlertController
  ) {
    this.email_get = this.dadosContaApi.email_get;
    this.translateService.use(this.language);
  }

  ngOnInit() {}

  alterarPass(): void {
    this.showPrompt();
  }

  showPrompt() {
    this.alertController
      .create({
        header: 'Atualizar Password',
        message: 'Digite uma nova Password',
        inputs: [
          {
            name: 'pass',
            placeholder: 'digite a password',
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: (data: any) => {
              console.log('Canceled', data);
            },
          },
          {
            text: 'Atualizar',
            handler: (data: any) => {
              console.log('Saved Information', data);
              this.dadosContaApi.atualizaPassword(data['pass']);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  public getInfo() {
    this.dadosContaApi.getInfo();
  }
}
