import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecuperaContaApiService } from './recuperar-conta-api.service';

import { IntroduzirCodigoPage } from './introduzir-codigo/introduzir-codigo.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.page.html',
  styleUrls: ['./recuperar-conta.page.scss'],
})
export class RecuperarContaPage implements OnInit {
  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    email: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private recuperarContaApi: RecuperaContaApiService,
    private model_controller: ModalController
  ) {}

  ngOnInit() {}

   //funcao para abri o model para abrir modal
  async presentModal() {
    const modal = await this.model_controller.create({
      component: IntroduzirCodigoPage,
    });
    return await modal.present();
  }

  public submit() {
    console.log(this.registrationForm.value);
    var email = this.registrationForm.get('email').value;
    this.recuperarContaApi.recuperarConta(email)
    this.presentModal();
  }
}
