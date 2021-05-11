import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  //endpoint da Api
  private url: String = '/utilizadores';

  constructor(private http: HttpClient) {}

  public mostraContas(): void {
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {}
    );
  }

  public login(): void {}
}
