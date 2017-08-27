import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../assets/stylesheets/static.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
  }

}
