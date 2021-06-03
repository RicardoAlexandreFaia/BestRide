import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecuperaContaApiService } from './recover-account-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recover-account.page.html',
  styleUrls: ['./recover-account.page.scss'],
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
    private recuperarContaApi: RecuperaContaApiService,
    private comp: AppComponent
  ) {
    comp.hide_tab = true;
  }

  ngOnInit() {}

  public submit() {
    let email = this.registrationForm.get('email').value;
    this.recuperarContaApi.recuperarConta(email);
  }
}
