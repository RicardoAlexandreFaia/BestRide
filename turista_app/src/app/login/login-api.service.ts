import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  //endpoint da Api
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';

  constructor(private http: HttpClient, private router: Router) {}

  public criaContaGoogle(email: String,password:string, f_name: string, l_name: string): void {
    console.log(f_name);
    console.log(l_name);

    let postData = {
      nome: f_name,
      password: password,
      login_type: '0',
    };

    this.http.post(environment.apiUrl + this.url, postData).subscribe(
      (data) => {
        console.log(data['iduser']);

        let postDataInfo = {
          email: email,
          primeiro_nome: f_name,
          ultimo_nome: l_name,
          userid: data['iduser'],
        };

        //guardar em userInfo
        this.http
          .post(environment.apiUrl + this.url_info, postDataInfo)
          .subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/menu']);
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public login(): void {}
}
