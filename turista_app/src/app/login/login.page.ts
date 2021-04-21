import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  // With FormBuilder
  profileForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  registrationForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {}

  //password
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
}
