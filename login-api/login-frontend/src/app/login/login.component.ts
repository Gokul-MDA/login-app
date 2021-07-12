import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FacebookLoginProvider, SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = new User();
  msg = '';
  public SocialUser = new SocialUser;

  constructor(private _service : RegistrationService, private _router : Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/add'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad Credientials, please enter valid email and password";
      }
    )
  }

   public signInWithGoogle() {
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
       data => this._router.navigate(['/add'])
     )
      
   }
  
    loginWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
       data => this._router.navigate(['/add'])
     )
      
  }


}
