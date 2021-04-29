import {Component, Inject, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import base64url from 'base64url';

const TOKEN_KEY = 'Authorization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  public isLoggedIn = false;
  public username: string;
  tokenStorage: TokenStorageService;

  ngOnInit(): void {
    if (localStorage.getItem(TOKEN_KEY)) {
      this.isLoggedIn = true;
      this.getUsernameFromToken(this.tokenStorage.getToken());
    }
  }

  public getUsernameFromToken(token: string): void{
    const payload64: string = token.split('.')[1];
    const payload: string = base64url.decode(payload64);
    const payloadJSON: JSON = JSON.parse(payload);
    this.username = payloadJSON["sub"].toString;
  }
}
