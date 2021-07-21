import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MapServiceService } from '../map-service.service';
import { RoadMap } from '../roadMap';

@Component({
  selector: 'app-options-map',
  templateUrl: './options-map.page.html',
  styleUrls: ['./options-map.page.scss'],
})
export class OptionsMapPage implements OnInit {
  public ionicForm: FormGroup;
  public trips: Array<RoadMap> = [];

  public registrationForm = this.formBuilder.group({
    location: ['', Validators.required],
    people: ['', Validators.required],
  });

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private map_service: MapServiceService
  ) {}

  ngOnInit() {}

  submit_form(): void {
    this.map_service.get_roads().subscribe((data) => {
      for (let pos in data) {
        this.trips.push(
          new RoadMap(
            data[pos].id,
            data[pos].title,
            data[pos].duration,
            data[pos].price,
            data[pos].description,
            data[pos].image,
            data[pos].location['coordinates'][0],
            data[pos].location['coordinates'][1]
          )
        );
      }
      //this.trips = data;
    });

    this.modalController.dismiss(this.trips);
  }
}
