import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { SERVER } from '../../../app.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  IdUser: any;
  Token: any;

  constructor(
    public http: HttpClient,
  ) {}

  initializeItems(){
    const rememberMe = localStorage.getItem('remember_me');
    const login = localStorage.getItem('login');
    if (login === 'login') {
      if (rememberMe === 'true') {
        this.IdUser = window.localStorage.getItem('idUser');
        this.Token = window.localStorage.getItem('token');
      } else {
        this.IdUser = window.sessionStorage.getItem('idUser');
        this.Token = window.sessionStorage.getItem('token');
      }
    }
  }

  getDataBank(idBank){
    this.initializeItems();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.Token);
    let params = new HttpParams();
    params = params.append('id_user', this.IdUser);
    if (idBank) { params = params.append('id_bank', idBank); }
    const options = { headers: headers, params: params };
    const response = this.http.get(SERVER + '/resource/institution-api/', options);
    return response;
  }

  getFiles(idBank){
    this.initializeItems();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.Token);
    let params = new HttpParams();
    params = params.append('id_user', this.IdUser);
    if (idBank) { params = params.append('id_bank', idBank); }
    const options = { headers: headers, params: params };
    const response = this.http.get(SERVER + '/resource/user-institution-file-api/', options);
    return response;
  }
}
