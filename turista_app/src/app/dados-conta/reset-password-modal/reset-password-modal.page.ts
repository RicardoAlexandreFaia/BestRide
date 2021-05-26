import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DadosContaApiService } from '../dados-conta-api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.page.html',
  styleUrls: ['./reset-password-modal.page.scss'],
})
export class ResetPasswordModalPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dadosContaApi: DadosContaApiService,
    private modalCtr: ModalController
  ) {}

  async alert(msg: String, body: String) {
    const alert = await this.alertController.create({
      header: '' + msg,
      message: '' + body,
      buttons: ['OK'],
    });

    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.alert('Erro', 'Valide Corretamente os Dados');
      return false;
    } else {
      var pass = this.ionicForm.get('pass').value;
      var pass_new = this.ionicForm.get('pass_repeat').value;
      if (pass != pass_new) {
        this.alert('Erro', 'As Password nao coincidem!');
      } else {
        //atualiza password
        this.dadosContaApi.atualizaPassword(pass_new);
        this.alert('Sucesso', 'Password alterada !');
        this.modalCtr.dismiss();
      }
    }
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass_repeat: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
