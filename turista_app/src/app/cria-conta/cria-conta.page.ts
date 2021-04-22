import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.page.html',
  styleUrls: ['./cria-conta.page.scss'],
})
export class CriaContaPage implements OnInit {
  showPass = false;
  showPass2 = false;

  passwordIconToggle: String = 'eye';
  passwordIconToggle2: String = 'eye';
  ionicForm: FormGroup;

  profileForm = this.formBuilder.group({
    email: '',
    pass: '',
    passRepeat: '',
  });

  registrationForm = this.formBuilder.group({
    email: [''],
    pass: [''],
    passRepeat: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  togglePass2(): void {
    this.showPass2 = !this.showPass2;

    if (this.passwordIconToggle2 == 'eye') {
      this.passwordIconToggle2 = 'eye-off';
    } else {
      this.passwordIconToggle2 = 'eye';
    }
  }

  // alerta sobre as passwords nao coincidirem
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message: 'As password não coincidem. Tente Novamente',
      buttons: ['Tentar Novamente'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  public submit() {
    console.log(this.registrationForm.get('pass').value);
    console.log(this.registrationForm.get('passRepeat').value);

    var pass: String = this.registrationForm.get('pass').value;
    var passRepetida: String = this.registrationForm.get('passRepeat').value;

    if (!(pass == passRepetida)) {
      this.showAlert();
    }
    console.log(this.registrationForm.value);
  }
}
