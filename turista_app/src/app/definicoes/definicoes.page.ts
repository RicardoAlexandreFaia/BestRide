import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-definicoes',
  templateUrl: './definicoes.page.html',
  styleUrls: ['./definicoes.page.scss'],
})
export class DefinicoesPage implements OnInit {
  language: string = this.translateService.currentLang;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) {
    this.translateService.use(this.language);
  }

  ngOnInit() {}

  mudarLinguagem() {
    this.translateService.use(this.language);
    localStorage.setItem('lang', this.language);
  }
}
