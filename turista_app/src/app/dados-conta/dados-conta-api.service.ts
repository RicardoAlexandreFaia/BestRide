import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
  private url: String = '/utilizadores/';
  private url_info: String = '/utilizadoresInfo/';

  private email_get: string;

  constructor(
    private http: HttpClient,
  ) {
    const id = localStorage.getItem('id');
    let email: string;
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

  public atualizaPassword(pass: string) : void {
    const id = localStorage.getItem('id');
    const data = {
      nome: 'teste',
      password: pass,
    };
    this.http
      .put(environment.apiUrl + this.url + id + '/', data)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }

  public getInfo() : void {
    this.http.get(environment.apiUrl + this.url).subscribe(
      (data) => {
        data.toString();
      },
      (erro) => { }
    );
  }

  public eliminaContaUserInfo() : void {
    const id = localStorage.getItem('id');
    const url_info_delete: String = '/utilizadoresInfo/deleteAccount';

    let postData = {
      id  : id,
    };

    this.http
      .post(environment.apiUrl + url_info_delete, postData)
      .subscribe((resposta) => {
        console.log(resposta);
      }
    );
  }

  public eliminaContaUser() : void {
    const id = localStorage.getItem('id');
    const url_delete: String = '/utilizadores/deleteAccount';

    let postData = {
      id  : id,
    };

    this.http
      .post(environment.apiUrl + url_delete, postData)
      .subscribe((resposta) => {
        console.log(resposta);
      }
    );
  }
}
