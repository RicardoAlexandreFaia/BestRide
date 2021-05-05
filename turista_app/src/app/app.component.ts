import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private router: Router, private globalization: Globalization) {
    this.initializacao();
  }

  initializacao(): void {
    this.globalization.getPreferredLanguage()
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }
  
}