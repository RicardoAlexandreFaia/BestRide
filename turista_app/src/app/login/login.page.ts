import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, isPlatform, AlertController } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';

//facebook login
import { HttpClient } from '@angular/common/http';
import { FacebookLoginPlugin } from '@capacitor-community/facebook-login';
import { FacebookLogin } from '@capacitor-community/facebook-login';
registerWebPlugin(FacebookLogin);

//google login
import '@codetrix-studio/capacitor-google-auth';

//api
import { LoginApiService } from './login-api.service';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPass = false;
  passwordIconToggle = 'eye';
  ionicForm: FormGroup;
  name: string;
  language: string = this.translateService.currentLang;

  //facebook
  fbLogin: FacebookLoginPlugin;
  user = null;
  token = null;

  //google
  userInfo = null;
  // Form Builder -> parametros
  profileForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  registrationForm = this.formBuilder.group({
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
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$'),
      ]),
    ],
  });

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private alertCtrl: AlertController,
    private loginApi: LoginApiService
  ) {
    this.translateService.use(this.language);
    this.setupFbLogin();
    this.loginApi.mostraContas();
  }

  /********************Facebook Login*************************** */
  async setupFbLogin() {
    if (isPlatform('desktop')) {
      this.fbLogin = FacebookLogin;
    } else {
      // Use the native implementation inside a real app!
      const { FacebookLogin } = Plugins;
      this.fbLogin = FacebookLogin;
    }
  }

  async login() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await this.fbLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });

    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
      this.router.navigate(['/cria-conta']);
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
      //this.router.navigate(['/cria-conta']);
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {
    const result = await this.fbLogin.getCurrentAccessToken();

    if (result.accessToken) {
      this.token = result.accessToken;
      this.loadUserData();
      this.router.navigate(['/menu']);
    } else {
      // Not logged in.
    }
  }

  async loadUserData() {
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe((res) => {
      this.user = res;
    });
  }

  async logout() {
    await this.fbLogin.logout();
    this.user = null;
    this.token = null;
  }

  //google login
  async googleSignup() {
    const googleUser = (await Plugins.GoogleAuth.signIn(null)) as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
    this.mostraDialogo();
    this.router.navigate(['/menu']);
  }

  async mostraDialogo() {
    const alert = await this.alertCtrl.create({
      header: 'Bem Vindo',
      message: 'Começe as suas viagens',
      buttons: ['OK'],
    });
    await alert.present();
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

  public submeter_login() {
    console.log(this.registrationForm.value);
    if (
      (this.email.value == 'claudio@gmail.com' ||
        this.email.value == 'ricardo@gmail.com') &&
      this.password.value == 'abc123+*A'
    ) {
      this.router.navigate(['/menu']);
    }
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
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

  //ir para a pagina - criar conta
  public navegar(): void {
    this.router.navigate(['/cria-conta']);
  }

  //ir para a pagina - criar conta
  public recuperarConta(): void {
    this.router.navigate(['/recuperar-conta']);
  }
}
