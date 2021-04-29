import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {observeOn} from 'rxjs/operators';
import * as http from 'http';

const SERVER_URL = 'http://localhost:8080/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(SERVER_URL + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(SERVER_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
