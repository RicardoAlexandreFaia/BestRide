import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CriaContaApiService } from './create-account-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CriaContaPage implements OnInit {
  public showPass = false;
  public showPass2 = false;
  public language: string = this.translateService.currentLang;

  public passwordIconToggle: String = 'eye';
  public passwordIconToggle2: String = 'eye';
  public ionicForm: FormGroup;
  isSubmitted = false;

  public phoneIndicative: any = [
    {
      country: 'Portugal',
      indicative: '+351',
    },
    {
      country: 'France',
      indicative: '+33',
    },
    {
      country: 'Spain',
      indicative: '+34',
    },
    {
      country: 'United Kingdom',
      indicative: '+44',
    },
  ];

  public gender: any = [
    {
      gender: 'male',
    },
    {
      gender: 'female',
    },
  ];

  public city: any = [
    {
      city: 'Lisbon',
    },
    {
      city: 'Sintra',
    },
  ];

  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private translateService: TranslateService,
    private api: CriaContaApiService,
    private comp: AppComponent
  ) {
    comp.hide_tab = true;
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        dob: ['', Validators.required],
        phone: ['', Validators.required],
        phone_ind: ['', Validators.required],
        address: ['', Validators.required],
        postal: ['', Validators.required],
        gender: ['', Validators.required],
        city: ['', Validators.required],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ]),
        ],
        pass: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ]),
        ],
        passRepeat: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ]),
        ],
      },
      { validator: this.matchingPasswords('pass', 'passRepeat') }
    );
  }

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

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true,
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      const indicative = this.ionicForm.get('phone_ind').value;
      const create_account = {
        name: this.ionicForm.get('name').value,
        dob: this.ionicForm.get('dob').value,
        phone: indicative + this.ionicForm.get('phone').value,
        address: this.ionicForm.get('address').value,
        postal: this.ionicForm.get('postal').value,
        gender: this.ionicForm.get('gender').value,
        city: this.ionicForm.get('city').value,
        email: this.ionicForm.get('email').value,
        pass: this.ionicForm.get('pass').value,
        passRepeat: this.ionicForm.get('passRepeat').value,
      };
      console.log(create_account);

      this.api.createAccount(create_account);
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
}
