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
  count:number = 1;
  voterange:number;
  votename:string;
  votedes:string;
  item:String[] = [];
  content:any[];

  constructor(private sanitizer: DomSanitizer,private vote:VoteService) {
    this.item = Array(this.count).fill("");
  }

  ngOnInit() {

  }

  public get htmlText() : SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this._htmlText);
  }

  addRow() {
    this.count++;
    this.item = Array(this.count).fill("");
    //this._htmlText = this._htmlText + `<input type="text" class="form-control input-lg" name="name" id="votename-input" placeholder="투표 보기 입력" [(ngModel)]="cand[`+this.count+`].name">`;
  }

  deleteRow() {
    this.count--;
    this.item = Array(this.count).fill("");
    //this._htmlText = this._htmlText.slice(0,this._htmlText.length-104);
    //console.log(this._htmlText.length);
  }

  create() {
    this.vote.createVote(this.votename,this.votedes,this.voterange,this.item);
  }

}
