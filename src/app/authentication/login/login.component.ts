import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  submitted = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required,),
    password: new FormControl('', Validators.required),

  })

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

  login(){
    var getUserName = this.loginForm.value.username;
    var hashPassword = Md5.hashStr(this.loginForm.value.password);

    console.log("Username", getUserName);
    console.log("Hash Password", hashPassword);

  }

  ngOnInit(): void {
  }

}
