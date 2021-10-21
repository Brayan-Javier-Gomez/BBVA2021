import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { SERVER } from '../../../app.component';

@Injectable({
  providedIn: 'root'
})
export class BasicsService {

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

  loginAuth(bodyParams){
    this.initializeItems();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    const body = JSON.stringify(bodyParams);
    const options = { headers: headers, params: params };
    const response = this.http.post(SERVER + '/login-api/', body, options);
    return response;
  }

  registerAjax(bodyParams){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const params = new HttpParams();
    const body = JSON.stringify(bodyParams);
    const options = { headers: headers, params: params };
    return this.http.post(SERVER + '/register-api/', body, options);
  }

  extraData(body){
    this.initializeItems();
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.Token);
    let params = new HttpParams();
    params = params.append('id_user', this.IdUser);
    params = params.append('from_web', '');
    const options = { headers: headers, params: params };
    const response = this.http.post(SERVER + '/login-api/', body, options);
    return response;
  }
}
