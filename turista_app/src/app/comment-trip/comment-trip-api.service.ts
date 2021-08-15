import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Observable } from 'rxjs';
import { RoadMap } from '../home_tab/roadMap';

@Injectable({
  providedIn: 'root',
})
export class CommentApiService {
  //urls
  private url: String = '/users/';
  private url_info: String = '/userInfo/';
  private url_comments: String = '/comments/';
  private url_road = '/itineary/showRoadMap';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) {}

  public comments: Observable<any>;
  
  public get_comments(id: Number): Observable<any> {
    this.comments = this.http.get(environment.apiUrl + this.url + id);
    return this.comments;
  }
}
