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

  email_get: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private nativeStorage: NativeStorage
  ) {
    var id = localStorage.getItem('id');
    var email: string;
    console.log(localStorage.getItem('id'));
    this.http.get(environment.apiUrl + this.url_info + id).subscribe((data) => {
      document.getElementById('nome_completo').innerText =
        'Utilizador:' + data['primeiro_nome'] + ' ' + data['ultimo_nome'];
      document.getElementById('email').innerText = data['email'];
      this.http
        .get(environment.apiUrl + this.url + id)
        .subscribe((data_user) => {
          console.log(data_user);
        });
    });
  }

  ngOnInit() { }

  public atualizaPassword(pass: string) {
    var id = localStorage.getItem('id');
    var data = {
      nome: 'teste',
      password: pass,
    };
    this.http
      .put(environment.apiUrl + this.url + id + '/', data)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }

  public getInfo() {
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        data.toString();
      },
      (erro) => { }
    );
  }

  public eliminaContaUserInfo() {
    var id = localStorage.getItem('id');
    var url_info_delete: String = '/utilizadoresInfo/deleteAccount';


    var data = {
      id: id,
    };

    this.http
      .post(environment.apiUrl + url_info_delete, data)
      .subscribe((resposta) => {
        console.log(resposta);
      }
    );
  }

  public eliminaContaUser() {
    var id = localStorage.getItem('id');
    var url_delete: String = '/utilizadores/deleteAccount';


    var data = {
      id: id,
    };

    this.http
      .post(environment.apiUrl + url_delete, data)
      .subscribe((resposta) => {
        console.log(resposta);
      }
    );
  }
}
