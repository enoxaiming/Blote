import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  loggedIn:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
  }

}
