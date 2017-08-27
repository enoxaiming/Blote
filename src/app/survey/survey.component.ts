import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

import { VoteService } from '../service/vote.service';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  email: String;
  code: String;
  verifyHTML: String = "";
  isActivated: boolean = false;
  isAuth: boolean = false;
  isExist: boolean = false;
  key: String;
  options = [];
  model = [];
  name = "";
  selectedEntry;
  contract_address: String="";
  account_address: String="";
  checked: number = 0;

  constructor(private vote: VoteService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit() {
    $('.wrapper').particleground({
      dotColor: '#CFD8DC',
      lineColor: '#CFD8DC',
      directionX: 'center'
    });
    console.log("do");
    this.checkExist();

  }

  verify() {
    this.vote.mailCall(this.email).subscribe(
      res => {
        console.log(res);
        if (res.status.code == 200) {
          alert("이메일이 전송되었습니다.");
          this.isActivated = true;
        }
        else {
          alert("잠시후 다시 시도해주세요.");
        }
      },
      error => {
        alert("잠시후 다시 시도해주세요.");
      });
  }

  verifyCode() {
    this.vote.emailVerify(this.email, this.code).subscribe(
      res => {
        if (res.status.code == 200) {
          //Key Saved.
          this.isAuth = true;
          this.cookie.setCookie('key', res.info.key, 1);
          sessionStorage.setItem('account', res.account);
          this.account_address = res.account;
          alert("인증에 성공하였습니다.");
        }
        else {
          alert("잘못된 인증코드입니다. 다시 시도해주세요.");
        }
      },
      error => {
        alert("잘못된 인증코드입니다. 다시 시도해주세요.");
      });
  }

  checkExist() {
    console.log("1");
    this.vote.checkVote(this.router.url.slice(8)).subscribe(
      res => {
        if (res.status.code == 200) {
          console.log(res);
          this.name = res.vote.name;
          this.isExist = true;
          this.options = res.candidates;
          this.contract_address = res.vote.contract_address;
        }
      },
      error => {
        alert("잘못된 인증코드입니다. 다시 시도해주세요.");
      });
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }


  }

  onSelectionChange(entry) {
    this.selectedEntry = entry;
    console.log(entry);
    for (var i = 0; i < this.options.length; i++) {
      if (entry == this.options[i]) {
        this.checked = i;
        console.log(i);
      }
      else {

      }
    }
  }

  doVote() {
    //this.vote.vote(this.contract_address,this.account_address,this.checked);
    this.vote.vote(this.contract_address,this.account_address,this.checked);
  }




}
