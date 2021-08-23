import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, isPlatform, AlertController } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
//facebook login
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacebookLoginPlugin } from '@capacitor-community/facebook-login';
import { FacebookLogin } from '@capacitor-community/facebook-login';
registerWebPlugin(FacebookLogin);
//google login
import '@codetrix-studio/capacitor-google-auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

//api
import { LoginApiService } from './login-api.service';
import { CriaContaApiService } from '../create_account/create-account-api.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppComponent } from '../app.component';
import { InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showPass = false;
  public passwordIconToggle = 'eye';
  public ionicForm: FormGroup;
  public name: string;
  public language: string = this.translateService.currentLang;

  //facebook
  private fbLogin: FacebookLoginPlugin;
  private user = null;
  private token = null;

  //google
  private userInfo = null;
  // Form Builder -> parametros
  private profileForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  public registrationForm = this.formBuilder.group({
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
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  private login_alert_text = {};
  public checked: Boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private alertCtrl: AlertController,
    private loginApi: LoginApiService,
    private storage: NativeStorage,
    private comp: AppComponent,
    private account_api: CriaContaApiService,
    private iab: InAppBrowser
  ) {
    comp.hide_tab = true;
    this.translateService.get('alert_login').subscribe((data) => {
      this.login_alert_text = {
        header: data['header'],
        message: data['message'],
        buttons: data['buttons'][0],
      };
    });
  }

  ngOnInit() {}

  //esconde/mostra password
  togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  public login(): void {
    if (!this.registrationForm.valid) {
      this.showDialog();
    } else {
      let email = this.registrationForm.get('email').value;
      let password = this.registrationForm.get('password').value;
      this.loginApi.login_user(email, password, this.checked);
    }
  }

  addValue(e): void {
    this.checked = e.currentTarget.checked;
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  async showDialog() {
    const alert = await this.alertCtrl.create({
      header: '' + this.login_alert_text['header'],
      cssClass: 'my-custom-class',
      message: '' + this.login_alert_text['message'],
      buttons: ['' + this.login_alert_text['buttons']],
    });
    alert.present();
  }

  public create_account(): void {
    this.router.navigate(['/create_account']);
  }

  public recover_account(): void {
    this.router.navigate(['/recover_account']);
  }

  public googleLogin(): void {
    const url =
      'https://bestride.auth.eu-west-2.amazoncognito.com/oauth2/authorize?' +
      'identity_provider=Google&response_type=code&client_id=' +
      '3r33mjn6o4surouviruvugp4bs' +
      '&' +
      'redirect_uri=http://localhost:8000&scope=email+openid+profile';
    const browser = this.iab.create(url, '_blank');

    if (browser.on('loadstart').subscribe)
      browser.on('loadstart').subscribe((e: InAppBrowserEvent) => {
        console.log('URL');
        console.log(e.url);

        const url_code = e.url.split('?');
        console.log(url_code[0]);
        console.log(url_code[1]);
        if (e.url === url_code[0] + '?' + url_code[1]) {
          const code = url_code[1].split('=')[1];
          console.log('CODE ' + code);
          this.loginApi.social_sign_in(code);
          //navigate to home tab
          //this.router.navigate(['/home_tab']);
          browser.close();
        }
      });
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [{ type: 'required', message: 'Password is required' }],
  };
}
