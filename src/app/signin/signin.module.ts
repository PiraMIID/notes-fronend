import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SigninComponent} from './signin.component';
import {SigninRoutingModule} from './signin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule
  ],
  declarations: [SigninComponent]
})

export class SigninModule {
}
