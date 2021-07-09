import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RoadMap, InterestPoints } from './roadMap';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapServiceService {
  private url = '/itineary/showRoadMap';
  private urlGetPoints = '/itineary/showItineary/';

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {}

  public get_roads(): Array<RoadMap> {
    let roads = new Array<RoadMap>();
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        for (let i in data) {
          roads.push(
            new RoadMap(
              data[i]['id'],
              data[i]['title'],
              data[i]['duration'],
              data[i]['price'],
              data[i]['description'],
              data[i].location.coordinates[0], // lat
              data[i].location.coordinates[1] // lng
            )
          );
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
