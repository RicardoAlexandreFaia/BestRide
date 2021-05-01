import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.page.html',
  styleUrls: ['./recuperar-conta.page.scss'],
})
export class RecuperarContaPage implements OnInit {
  ionicForm: FormGroup;

  profileForm = this.formBuilder.group({
    email: '',
  });

  registrationForm = this.formBuilder.group({
    email: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  public submit() {
    console.log(this.registrationForm.value);
  }
}
