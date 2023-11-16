import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {
  constructor(private router: Router, private registrationService: RegistrationService) {}
  username: string = '';
  password: string = '';
  email:string='';
  registerUser() {
    console.log("register user enter. ")
    console.log("register data"+this.username,this.password,this.email)
    this.registrationService.registerUser(this.username, this.password ,this.email)
      .subscribe((response) => {
        console.log('Registration successful:', response);
      },(error)=> {
        console.error('Registration error:', error);
      }
    );
    console.log("register user exit. ")
  }

}
