import { Component, OnInit } from '@angular/core';

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
  code:String;
  verifyHTML: String = "";
  isActivated:boolean = false;

  constructor(private vote: VoteService,private cookie:CookieService) { }

  ngOnInit() {
    $('.wrapper').particleground({
      dotColor: '#CFD8DC',
      lineColor: '#CFD8DC',
      directionX: 'center'
    });
  }

  verify() {
    this.vote.mailCall(this.email).subscribe(
      res => {
        console.log(res);
        if(res.status.code == 200) {
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
    this.vote.emailVerify(this.email,this.code).subscribe(
      res => {
        if(res.status.code == 200) {
          //Key Saved.
          this.cookie.setCookie('key',res.info.key,1);
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

}
