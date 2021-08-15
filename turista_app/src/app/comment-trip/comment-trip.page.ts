import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommentApiService } from './comment-trip-api.service';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Component({
  selector: 'app-comment-trip',
  templateUrl: './comment-trip.page.html',
  styleUrls: ['./comment-trip.page.scss'],
})
export class CommentTripPage implements OnInit {
  public ionicForm: FormGroup;
  public roadId : Number;
  public roadTitle : String;
  public comments:  Array<Comment> = [];
  public progress: boolean = false;

  public registrationForm = this.formBuilder.group({
    email: [
      '',
      Validators.compose([
        Validators.maxLength(70),
        Validators.pattern(
          '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
        ),
        Validators.required,
      ]),
    ],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private comp: AppComponent,
    private comments_api: CommentApiService) { 
      this.roadId = JSON.parse(localStorage.getItem('roadMapID'));
      this.roadTitle = localStorage.getItem('roadMapTitle');
    }

  ngOnInit() {
  }
  
  public getComments(){
    this.comments_api.get_comments(this.roadId).subscribe((data) => {
      for (let pos in data) {
        this.comments.push(
          new Comment(
            data[pos].id,
            data[pos].pontuation,
            data[pos].comment,
            data[pos].User_idUser
          )
        );
      }
    });
  }

  public getRoadTitle(){
    return this.roadTitle;
  }
}
