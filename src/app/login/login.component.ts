import { Component, OnInit } from '@angular/core';

import {AuthService} from "../service/auth.service";

import { fadeInAnimation } from '../_animation/index';


import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation':''}
})
export class LoginComponent implements OnInit {

  private email:String;
  private pwd:String

  constructor(
    private fb: FacebookService, private auth:AuthService
  ) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '109089776436251',
      version: 'v2.10'
    });

  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.email,this.pwd);
  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  facebookLogin() {
    this.fb.login()
    .then((res: LoginResponse) => {
      console.log('Logged in', res);
    })
    .catch(this.handleError);
  }

  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }

  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */

  private handleError(error) {
    console.error('Error processing action', error);
  }

  

}
