import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module'
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    ResetComponent
  ]
})
export class AuthenticationModule { }
