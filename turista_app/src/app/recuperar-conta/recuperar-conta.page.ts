import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecuperaContaApiService } from './recuperar-conta-api.service';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.page.html',
  styleUrls: ['./recuperar-conta.page.scss'],
})
export class RecuperarContaPage implements OnInit {
  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    email: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private recuperarContaApi: RecuperaContaApiService
  ) {}

  ngOnInit() {}

  public submit() {
    console.log(this.registrationForm.value);
    var email = this.registrationForm.get('email').value;
    this.recuperarContaApi.recuperarConta(email)
  }

  public submeter_email() {
    console.log(this.registrationForm.value);
    var email = this.registrationForm.get('email').value;
    this.recuperarContaApi.recuperarConta(email);
  }
}
