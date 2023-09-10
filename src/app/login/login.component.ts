import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: FormGroup | any;
  submitted = false;
  loginData = {
    email: '',
    password: ''
  };
    constructor(private formBuilder: FormBuilder) { }

    get loginCo() { return this.loginForm.controls; }
    
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: new FormControl('Email is required', [Validators.required, Validators.email]),  
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        ]),
      }, {
      });
    }
    onLoginFormSubmit() {
      this.submitted = true;
    if (this.loginForm.invalid) {
      return;
     }
      if (this.loginForm.valid) {
        console.log(this.loginData)
      }
    }
  }
