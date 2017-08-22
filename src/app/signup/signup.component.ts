import { Component, OnInit } from '@angular/core';

import {AuthService} from '../service/auth.service';

import { fadeInAnimation } from '../_animation/index';

 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation':''}
})
export class SignupComponent implements OnInit {

  private name : String;
  private email : String;
  private password : String;
  private org : String;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.name,this.email,this.password,this.org);
  }

}
