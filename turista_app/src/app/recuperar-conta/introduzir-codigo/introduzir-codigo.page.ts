import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IntroduzirCodigoApiService } from './introduzir-codigo-api.service';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-introduzir-codigo',
  templateUrl: './introduzir-codigo.page.html',
  styleUrls: ['./introduzir-codigo.page.scss'],
})
export class IntroduzirCodigoPage implements OnInit {

  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    code: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private introduzirCodigoApi: IntroduzirCodigoApiService,
    private model_controller: ModalController
  ) {}

  ngOnInit() {}

  public submit()  : void {
    console.log(this.registrationForm.value);
    var code = this.registrationForm.get('code').value;
    this.introduzirCodigoApi.codeVerification(code)
    this.presentModal();
    this.close();
  }

  //funcao para abri o model para abrir modal
  async presentModal() {
    const modal = await this.model_controller.create({
      component: ResetPasswordModalPage,
    });
    return await modal.present();
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.model_controller.dismiss(closeModal);
  }
}
