import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private router: Router) {
    this.initializacao();
  }

  initializacao(): void {
    // app tem como predefinicao a linguagem PT
    this.translate.setDefaultLang('pt');
  }
  goDefinitions(): void {
    console.log('this');
    this.router.navigate(['/definicoes']);
  }

  goCalendario(){
    console.log('this');
    this.router.navigate(['/calendario']);
  }
}
