import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../_animation/index';

import {VoteService} from '../service/vote.service';
import {CookieService} from '../service/cookie.service';

import * as web3 from 'Web3';

declare const $ : any;

@Component({
  moduleId: module.id.toString(),
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation':''}
})
export class MainComponent implements OnInit {

  constructor(private vote:VoteService,private cookie:CookieService) { }

  ngOnInit() {
    $('.top-content').particleground({
            dotColor: '#CFD8DC',
            lineColor: '#CFD8DC',
            directionX: 'center'
        });
    //this.test = new web3().version.api;
    console.log(this.cookie.getCookie('id_token'));
  }

  about() {
    this.vote.checkVote("SkAiu1kKZ","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJjaGFuZ2UiLCJpZCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJvcmciOiJrZG1oIiwidmVyaWZpZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDE3LTA4LTIyVDA3OjAzOjQ4LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTA4LTI0VDA3OjM0OjQ5LjAwMFoifSwiaWF0IjoxNTAzNzUwMTg0fQ.kWXfB0yXZuWYIJjluKG05PdPyrE6vuqwZCWEETgI_y8");
    //var appUriScheme = "intent://#Intent;package=blote.org.bloteAndroid;scheme=callMyApp;end;";
    //document.location.href = appUriScheme;
  }
  

}
