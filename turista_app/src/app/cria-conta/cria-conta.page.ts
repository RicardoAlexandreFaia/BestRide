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
    name: '',
    dob: '',
    cellphone: '',
    address: '',
    postal: '',
    gender: '',
    city: '',
    email: '',
    pass: '',
    passRepeat: '',
  });

  registrationForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      dob: ['', Validators.required],
      cellphone: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
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
    var name: String = this.registrationForm.get('name').value;
    var dob: String = this.registrationForm.get('dob').value;
    var phone: string = this.registrationForm.get('cellphone').value;
    var address: string = this.registrationForm.get('address').value;
    var postal: string = this.registrationForm.get('postal').value;
    var gender: string = this.registrationForm.get('gender').value;
    var city: string = this.registrationForm.get('city').value;
    var email: string = this.registrationForm.get('email').value;
    var pass: string = this.registrationForm.get('pass').value;
    var passRepeat: string = this.registrationForm.get('passRepeat').value;

    console.log(name);
    console.log(dob);
    console.log(phone);
    console.log(address);
    console.log(postal);
    console.log(gender);
    console.log(city);
    console.log(email);
    console.log(pass);
    console.log(passRepeat);
    this.api.criaConta(
      name,
      dob,
      phone,
      address,
      postal,
      gender,
      city,
      email,
      pass,
      passRepeat
    );
  }

  public errorMessages = {
    password: [
      { type: 'required', message: 'Password e necessária!' },
      { type: 'maxlength', message: 'password is necessary' },
    ],
    email: [
      { type: 'required', message: 'Email e necessário!' },
      { type: 'pattern', message: 'Digite um email valido' },
    ],
  };
}
