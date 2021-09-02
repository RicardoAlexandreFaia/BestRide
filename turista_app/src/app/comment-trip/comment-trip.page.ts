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
import { Comment, User } from './comment';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

@Component({
  selector: 'app-comment-trip',
  templateUrl: './comment-trip.page.html',
  styleUrls: ['./comment-trip.page.scss'],
})
export class CommentTripPage implements OnInit {
  public ionicForm: FormGroup;
  public roadId = JSON.parse(localStorage.getItem('roadMapID'));
  public roadTitle: String;
  public comments: Array<Comment> = [];
  public progress: boolean = false;
  public language: string = this.translateService.currentLang;
  private form: FormGroup;
  public user: User;

  public registrationForm = this.formBuilder.group({
    rating: ['', Validators.compose([Validators.required])],
    comment: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(350)]),
    ],
  });

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private comp: AppComponent,
    private comments_api: CommentApiService,
    private trans: CustomTranslateService
  ) {}

  ngOnInit() {
    this.comments = this.comments_api.get_comments(this.roadId);
  }

  public convertToNumber(event): number {
    return +event;
  }

  public submit() {
    this.user = this.comments_api.getUser();
    let comment = new Comment(
      this.registrationForm.get('rating').value,
      this.registrationForm.get('comment').value,
      this.roadId,
      this.user.name
    );
    this.comments_api.postComment(comment);
  }

  public getRoadTitle(): String {
    return this.roadTitle;
  }
}
