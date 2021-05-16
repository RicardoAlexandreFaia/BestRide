import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
    private url: String = '/utilizadores/';
    private url_info: String = '/utilizadoresInfo/';

    constructor(private http: HttpClient, private router: Router) {}

    public getInfo(){

      this.http.get(environment.apiUrl + this.url).subscribe(
        (data) => {
          data.toString()
        },
        (erro) => {
        }
      );
    }
}
