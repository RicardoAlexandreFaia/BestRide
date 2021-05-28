import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CriaContaApiService {
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';

  constructor(private http: HttpClient, private router: Router) {}

  public criaConta(
    name: String,
    dob: String,
    phone: String,
    address: String,
    postal: String,
    gender: String,
    city: String,
    email: String,
    pass: String,
    passRepeat: String
  ): void {
    let postData = {
      password: pass,
      login_type: '0',
    };

    this.http.post(environment.apiUrl + this.url, postData).subscribe(
      (data) => {
        console.log(data['iduser']);

        let id_user = data['iduser'];
        let postDataInfo = {
          user_iduser: id_user,
          email: email,
          name: name,
          dob: dob,
          city: city,
          gender: gender,
          phone_number: phone,
          adress: address,
          postal_code: postal,
        };

        //guardar em userInfo
        this.http
          .post(environment.apiUrl + this.url_info, postDataInfo)
          .subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/login']);
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
}
