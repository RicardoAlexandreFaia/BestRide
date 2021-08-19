import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RoadMap, InterestPoints } from './roadMap';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class MapServiceService {
  private url = '/itineary/showRoadMap';
  private urlGetPoints = '/itineary/showItineary/';
  private urlDistance = '/itineary/distance/';
  private urlVehicles = '/itineray/showRoadVehicles/';

  user: User;

  constructor(private http: HttpClient, private geolocation: Geolocation) {}

  ngOnInit() {
    this.getUserPosition();
  }

  ionViewDidEnter() {}

  private getUserPosition(): void {
    this.geolocation
      .getCurrentPosition()
      .then((res) => {
        this.user = new User(res.coords.latitude, res.coords.longitude);
      })
      .catch((error) => {});
  }

  public roads: Observable<any>;
  public interest: Observable<any>;
  public vehicles: Observable<any>;

  public get_roads(): Observable<any> {
    this.roads = this.http.post(environment.apiUrl + this.url, {
      lat: this.user.lat,
      lng: this.user.lng,
      kmMAX: 20,
    });
    return this.roads;
  }

  public get_points_interest(id: number): Observable<any> {
    this.interest = this.http.get(environment.apiUrl + this.urlGetPoints + id);
    return this.interest;
  }

  public get_vehicles_road(id: number): Observable<any> {
    this.vehicles = this.http.get(environment.apiUrl + this.urlVehicles + id);
    return this.vehicles;
  }
}
