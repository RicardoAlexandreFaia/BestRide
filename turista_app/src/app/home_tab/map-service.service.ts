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

  public get_roads(): Observable<any> {
    this.roads = this.http.get(environment.apiUrl + this.url);
    return this.roads;
  }

  public get_points_interest(id: number): Observable<any> {
    this.interest = this.http.get(environment.apiUrl + this.urlGetPoints + id);
    return this.interest;
  }
}
