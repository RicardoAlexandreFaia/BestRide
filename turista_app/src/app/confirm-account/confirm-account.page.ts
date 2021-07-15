import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {
  ionicForm: FormGroup;
  registrationForm = this.formBuilder.group({
    code: [
      '',
      Validators.compose([Validators.minLength(7), Validators.required]),
    ],
  });
  private url: String = '/verifyAccount/';

  constructor(
    private comp: AppComponent,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) {
    comp.hide_tab = true;
  }

  ngOnInit() {}

  private async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'rrro',
      buttons: ['OK'],
    });

    await alert.present();
  }

  public validateUser(): void {
    let code = this.registrationForm.get('code').value;
    console.log(code);

    const data = {
      code: '' + code,
    };

    this.http.post(environment.apiUrl + this.url, data).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (erro) => {}
    );
  }
}
