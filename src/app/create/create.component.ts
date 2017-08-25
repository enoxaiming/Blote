import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import {VoteService} from '../service/vote.service';

declare const $: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  _htmlText: string = "";

  constructor(private sanitizer: DomSanitizer,private vote:VoteService) { }

  ngOnInit() {

  }

  public get htmlText() : SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this._htmlText);
  }

  addRow() {
    this._htmlText = this._htmlText + `<input type="text" class="form-control input-lg" name="name" id="votename-input" placeholder="투표 보기 입력">`;
    console.log(this._htmlText.length);
  }

  deleteRow() {
    this._htmlText = this._htmlText.slice(0,this._htmlText.length-104);
    console.log(this._htmlText.length);
  }

  create() {
    
  }

}

class Candidate {
  name : String;
  descript : String;
  constructor(name,descript) {
      this.name = name;
      this.descript = descript;
  }
}
