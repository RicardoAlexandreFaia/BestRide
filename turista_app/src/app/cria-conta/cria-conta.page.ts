import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CriaContaApiService } from '../cria-conta/cria-conta-api.service';

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
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private translateService: TranslateService,
    private api: CriaContaApiService
  ) {}

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('pass');
  }
  get passwordRepeat() {
    return this.registrationForm.get('passRepeat');
  }

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
    var email: String = this.registrationForm.get('email').value;
    var password: String = this.registrationForm.get('pass').value;

    this.api.criaConta(email, password);
  }

  public errorMessages = {
    password: [
      { type: 'required', message: 'Password e necessária!' },
      { type: 'maxlength', message: 'password is necessary' },
    ],
    email: [
      { type: 'required', message: 'Email e necessário!' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
  };
}
