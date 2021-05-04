import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarioApiService {
  private url: String = '/api/employees';
  // localhost/api/employees

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<any[]> {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    return this.http.get<any[]>(`${environment.apiUrl}${this.url}`, {
      headers: headers,
    });
  }
}
