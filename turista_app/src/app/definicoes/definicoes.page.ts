import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-definicoes',
  templateUrl: './definicoes.page.html',
  styleUrls: ['./definicoes.page.scss'],
})
export class DefinicoesPage implements OnInit {
  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}

  mudarLinguagem() {
    this.translateService.use(this.language);
  }
}
