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
import { CustomTranslateService } from '../shared/services/custom-translate.service';


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
  public language: string = this.translateService.currentLang;
  private form : FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private comp: AppComponent,
    private comments_api: CommentApiService,
    private trans: CustomTranslateService) {
      this.form = this.formBuilder.group({
        rating: ['', Validators.required],
        comment: [''],
      });
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

  public convertToNumber(event):number {  return +event; }

  public submit(){
    let comment = new Comment(0,  this.form.value('rating'), this.form.value('comment'), 0/*user id*/)
    this.comments_api.postComment(comment);
  }

  public getRoadTitle(){
    return this.roadTitle;
  }
}
