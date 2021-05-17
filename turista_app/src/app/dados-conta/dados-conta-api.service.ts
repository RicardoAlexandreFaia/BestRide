import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';

  public email_get: String = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private nativeStorage: NativeStorage
  ) {
    var id = localStorage.getItem('id');
    console.log(localStorage.getItem('id'));
    this.http.get(environment.apiUrl + this.url + id).subscribe((data) => {
      this.email_get = data['nome'];
      console.log(data['nome']);
      console.log(data);
    });
  }

  public getInfo() {
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        data.toString();
      },
      (erro) => {}
    );
  }
}
