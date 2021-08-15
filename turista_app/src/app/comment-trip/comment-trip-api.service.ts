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
  private url_get_user: String = '/getUser/';
  private url_comments: String = '/getComments/';
  private url_road = '/itineary/showRoadMap';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) {}

  public comments: Observable<any>;
  
  public get_comments(id: Number): Observable<any> {
    this.comments = this.http.post(environment.apiUrl + this.url_comments, {id : id});
    return this.comments;
  }
  
}
