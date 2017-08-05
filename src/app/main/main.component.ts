import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../_animation/index';

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

  constructor() { }

  ngOnInit() {
    $('.top-content').particleground({
            dotColor: '#CFD8DC',
            lineColor: '#CFD8DC'
        });
    //this.test = new web3().version.api;
  }

  about() {
    location.href='/about';
  }
  

}
