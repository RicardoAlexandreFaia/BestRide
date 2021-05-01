import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.page.html',
  styleUrls: ['./recuperar-conta.page.scss'],
})
export class RecuperarContaPage implements OnInit {
  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  profileForm = this.formBuilder.group({
    email: '',
  });

  registrationForm = this.formBuilder.group({
    email: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  public submit() {
    console.log(this.registrationForm.value);
  }
}
