import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Register: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Register = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
    });
  }
  onSubmit() {
    if (this.Register.valid) {
      // Perform form submission logic here
      console.log(this.Register.value);
    }
  }
}
