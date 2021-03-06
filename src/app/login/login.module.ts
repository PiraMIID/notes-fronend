import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})

export class LoginModule {
}
