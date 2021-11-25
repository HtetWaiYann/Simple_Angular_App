import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllInOneService } from 'src/app/shared/services/all-in-one.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupFormSubmitted : boolean = false
  isStillSigningUp: boolean = false

  signupForm = {
    "name" : "",
    "email" : "",
    "password" : "",
  }

  constructor(
    public allinoneService: AllInOneService,
    private router : Router,
  ) { 
    if (this.allinoneService.getToken()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {
  }

  signUp(){
    this.signupFormSubmitted = true
    if(this.signupForm.name && this.signupForm.email && this.signupForm.password){
      this.isStillSigningUp = true
    }
  }

  signin(){
    this.router.navigateByUrl('signin')
  }

}
