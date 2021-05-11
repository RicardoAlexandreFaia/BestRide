import { Component, OnInit } from '@angular/core';
import { Environment } from '@ionic-native/google-maps';
import { CalendarComponentOptions } from 'ion2-calendar';
import { CalendarioApiService } from './calendario-api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
  };

  constructor(public calendarioService: CalendarioApiService) {}

  ngOnInit() {
    this.calendarioService.getEmployees();
  }

  onChange($event) {
    console.log($event);
  }
}
