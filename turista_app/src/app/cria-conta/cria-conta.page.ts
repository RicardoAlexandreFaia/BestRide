import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.page.html',
  styleUrls: ['./cria-conta.page.scss'],
})
export class CriaContaPage implements OnInit {
  showPass = false;
  showPass2 = false;
  language: string = this.translateService.currentLang;

  passwordIconToggle: String = 'eye';
  passwordIconToggle2: String = 'eye';
  ionicForm: FormGroup;

  profileForm = this.formBuilder.group({
    email: '',
    pass: '',
    passRepeat: '',
  });

  registrationForm = this.formBuilder.group(
    {
      email: [
        '',
        Validators.compose([
          Validators.maxLength(70),
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
          Validators.required,
        ]),
      ],
      pass: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$'),
        ]),
      ],
      passRepeat: ['', Validators.required],
    },
    { validator: this.matchingPasswords('pass', 'passRepeat') }
  );

  constructor(
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private translateService: TranslateService
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

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true,
        };
      }
    };
  }

  public submit() {
    console.log(this.registrationForm.get('pass').value);
    console.log(this.registrationForm.get('passRepeat').value);

    var pass: String = this.registrationForm.get('pass').value;
    var passRepetida: String = this.registrationForm.get('passRepeat').value;

    console.log(this.registrationForm.value);
  }
}
