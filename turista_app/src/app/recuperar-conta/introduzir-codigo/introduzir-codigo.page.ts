import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IntroduzirCodigoApiService } from './introduzir-codigo-api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-introduzir-codigo',
  templateUrl: './introduzir-codigo.page.html',
  styleUrls: ['./introduzir-codigo.page.scss'],
})
export class IntroduzirCodigoPage implements OnInit {

  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    code: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private introduzirCodigoApi: IntroduzirCodigoApiService,
    private modalCtr: ModalController
  ) {}

  ngOnInit() {}

  public submit() {
    console.log(this.registrationForm.value);
    var code = this.registrationForm.get('code').value;
    this.introduzirCodigoApi.recuperarConta(code)
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }
}
