import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DadosContaApiService } from './user-tab-api.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';
import { User } from '../user_tab/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './user-tab.page.html',
  styleUrls: ['./user-tab.page.scss'],
})
export class DadosContaPage implements OnInit {
  public showPass = false;
  public passwordIconToggle = 'eye';

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;

  // Input Controls
  public name_input: boolean = true;
  public city_input: boolean = true;
  public email_input: boolean = true;
  public phone_input: boolean = true;
  public street_input: boolean = true;
  public button: boolean = true;

  public icon_input: string = 'create-outline';

  public language: string = this.translateService.currentLang;
  ionicForm: FormGroup;

  public user: User;
  imageResponse: any;
  options: any;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private dadosContaApi: DadosContaApiService,
    public alertController: AlertController,
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private imagePicker: ImagePicker
  ) {
    this.user = new User('', '', '', '', '', ''); //  Initialize
  }

  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1,
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
          console.log(this.imageResponse[0]);
          const data = {
            image: this.imageResponse[0],
          };
          this.dadosContaApi.updateImageUser(data);
        }
      },
      (err) => {
        alert(err);
      }
    );
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
    setTimeout(() => {
      this.user = this.dadosContaApi.getUser();
    }, 2000);
  }

  ionViewDidEnter() {
    this.name = this.dadosContaApi.name;
    this.city = this.dadosContaApi.city;
    this.email = this.dadosContaApi.email;
    this.phone = this.dadosContaApi.phone;
    this.address = this.dadosContaApi.address;
    this.postal = this.dadosContaApi.postal;
  }

  public changeInputStatus(): void {
    if (this.icon_input == 'create-outline') {
      this.icon_input = 'close-outline';
    } else {
      this.icon_input = 'create-outline';
    }
  }

  public alterarPass(): void {
    this.presentModal();
  }

  public updateUser(): void {
    let dados_conta_dict = {
      name: this.ionicForm.value['name'],
      city: this.ionicForm.value['city'],
      email: this.ionicForm.value['email'],
      phone: this.ionicForm.value['phone'],
      address: this.ionicForm.value['address'],
    };
    this.dadosContaApi.updateUser(dados_conta_dict);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResetPasswordModalPage,
      cssClass: 'reset-password-modal.page.scss',
    });
    return await modal.present();
  }

  public deleteAccount(): void {
    this.dadosContaApi.deleteUser();
  }

  public activateEdit(component: string): void {
    this.button = !this.button;
    switch (component) {
      case 'name': {
        this.name_input = !this.name_input;
        break;
      }
      case 'city': {
        this.city_input = !this.city_input;
        break;
      }
      case 'email': {
        this.email_input = !this.email_input;
        break;
      }
      case 'phone': {
        this.phone_input = !this.phone_input;
        break;
      }
      case 'street': {
        this.street_input = !this.street_input;
        break;
      }
    }
  }
}
