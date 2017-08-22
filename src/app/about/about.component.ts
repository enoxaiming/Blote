import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../_animation/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation':''},
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
