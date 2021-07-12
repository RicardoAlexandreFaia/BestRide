import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RoadMap, InterestPoints } from './roadMap';
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

  private MAX_DISTANCE = 22;

  constructor(private http: HttpClient, private geolocation: Geolocation) {}

  ngOnInit() {
    console.log('ola');
    this.getUserPosition();
  }

  ionViewDidEnter() {}

  private getUserPosition(): void {
    this.geolocation
      .getCurrentPosition()
      .then((res) => {
        console.log(res.coords.latitude);
        this.user = new User(res.coords.latitude, res.coords.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  private haversine_distance(mk1: any, mk2: any): number {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.lat * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.location.coordinates[0] * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.location.coordinates[1] - mk1.lng) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d;
  }

  public get_roads(): Array<RoadMap> {
    let roads = new Array<RoadMap>();
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        for (let i in data) {
          //verify the distance of the interest points
          let distance = Math.round(
            this.haversine_distance(this.user, data[i])
          );

          // add the roadMap on the array
          if (distance <= this.MAX_DISTANCE) {
            roads.push(
              new RoadMap(
                data[i]['id'],
                data[i]['title'],
                data[i]['duration'],
                data[i]['price'],
                data[i]['description'],
                data[i]['image'],
                data[i].location.coordinates[0], // lat
                data[i].location.coordinates[1] // lng
              )
            );
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return roads;
  }

  public get_points_interest(id: number): Array<InterestPoints> {
    let interest = new Array<InterestPoints>();
    this.http.get(environment.apiUrl + this.urlGetPoints + id).subscribe(
      (data) => {
        for (let i in data) {
          interest.push(
            new InterestPoints(
              data[i]['interest_points'].descricao,
              data[i]['interest_points'].location.coordinates[0],
              data[i]['interest_points'].location.coordinates[1]
            )
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return interest;
  }
}
