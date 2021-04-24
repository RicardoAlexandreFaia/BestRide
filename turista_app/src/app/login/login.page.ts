import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public formBuilder: FormBuilder, private router: Router) {}

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

  public submit() {
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
    console.log('ola');
    this.router.navigate(['/cria-conta']);
  }

  //ir para a pagina - criar conta
  public recuperarConta(): void {
    console.log('ola');
    this.router.navigate(['/recuperar-conta']);
  }
}
