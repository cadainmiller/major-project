import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor() { }

  submitted = false;

  resetForm = new FormGroup({
    email: new FormControl('', Validators.required,)
  })

  get email() {
    return this.resetForm.get('email');
  }

  resetpassword() {

    var getEmail = this.resetForm.value.email;

    console.log(getEmail);
  }

  ngOnInit(): void {
  }

}
