import { Component } from '@angular/core';
import * as web3 from 'Web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new web3().version.api;
}
