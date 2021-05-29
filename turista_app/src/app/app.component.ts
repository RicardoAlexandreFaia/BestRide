import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  language: string = this.translate.currentLang;

  user_email: String;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) {
    this.initializacao();
  }

  initializacao(): void {
    if ('lang' in localStorage) {
      this.translate.setDefaultLang(localStorage.getItem('lang'));
    } else {
      this.translate.setDefaultLang('en');
    }
    this.user_email = localStorage.getItem('email');
  }
}
