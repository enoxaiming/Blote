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
    this.vote.checkVote("SkAiu1kKZ");
    //var appUriScheme = "intent://#Intent;package=blote.org.bloteAndroid;scheme=callMyApp;end;";
    //document.location.href = appUriScheme;
  }
  

}
