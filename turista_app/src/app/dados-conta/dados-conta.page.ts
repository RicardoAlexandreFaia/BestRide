import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DadosContaApiService } from './dados-conta-api.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  language: string = this.translateService.currentLang;
  showPass = false;
  passwordIconToggle = 'eye';

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;

  valor: boolean;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private dadosContaApi: DadosContaApiService,
    public alertController: AlertController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.valor = !this.valor;
  }

  ionViewDidEnter() {
    this.name = this.dadosContaApi.name;
    this.city = this.dadosContaApi.city;
    this.email = this.dadosContaApi.email;
    this.phone = this.dadosContaApi.phone;
    this.address = this.dadosContaApi.address;
    this.postal = this.dadosContaApi.postal;
    this.translateService.use(this.language);
  }

  alterarPass(): void {
    this.presentModal();
  }

  public alterarCampos(): void {
    this.dadosContaApi.atualizaCampos(
      this.name,
      this.city,
      this.email,
      this.phone,
      this.address,
      this.postal
    );
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResetPasswordModalPage,
      cssClass: 'reset-password-modal.page.scss',
    });
    return await modal.present();
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
