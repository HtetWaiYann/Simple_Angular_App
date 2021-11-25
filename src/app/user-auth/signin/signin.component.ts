import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllInOneService } from 'src/app/shared/services/all-in-one.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinFormSubmitted: boolean = false
  isStillSigningIn: boolean = false
  signinForm  = {
    "email" : "",
    "password" : ""
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

  signIn(){
    this.signinFormSubmitted = true
    if(this.signinForm.email && this.signinForm.password){
      this.isStillSigningIn = true
      // Call api here
    }
  }

  signup(){
    this.router.navigateByUrl('/signup')
  }

}
