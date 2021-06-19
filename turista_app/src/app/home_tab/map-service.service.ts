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
              data[i]['description']
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
              data[i]['interest_points'].latitude_inicio,
              data[i]['interest_points'].longitude_inicio
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
