import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';

import { CookieService } from './cookie.service';

import 'rxjs/add/operator/map';

import * as web3 from 'Web3';

import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';



@Injectable()
export class AuthService {

    constructor(private http: Http, private router: Router, private cookie: CookieService, private fb: FacebookService) {
        fb.init({
            appId: '109089776436251',
            version: 'v2.10'
        });
    }

    fbLogin() {
        this.fb.login()
            .then((response: LoginResponse) => {
                console.log(response);
                this.cookie.setCookie('type', "fb", 1);
                location.href = '/home';
            }
            )

            .catch((error: any) => console.error(error));
    }

    signup(name:String,email:String,pwd:String,org:String) {
        let url = "http://dudgns0507.cafe24.com:3000/users/signup";
        let body = {
            "name" : name,
            "id" : email,
            "pw" : pwd,
            "org": org
        }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("성공");
                console.log("Response : " + res);
                location.href='';
            },

            error => {
                console.log("오류");
                console.log(error);
            }
            );
    }

    login(email:String,pwd:String) {
        let url = "http://dudgns0507.cafe24.com:3000/users/signin";
        let body = {
            "id" : email,
            "pw" : pwd
        }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("성공");
                console.log("Response : " + res);
            },

            error => {
                console.log("오류");
                console.log(error);
            }
            );
    }


    loggedIn() {
        console.log('checking token!!');

        //Default isValie = true
        let isValid: boolean = true;

        //look for token
        //var sessionToken = sessionStorage.getItem('id_token');
        var token = this.cookie.getCookie('type');
        //Token Exist
        if (token) {
            console.log("sessionLoggedIn");
        }

        //token not found
        else {
            console.log("no login");
            isValid = false;
        }
        return isValid;
    }

    logout() {
        alert("로그아웃 되었습니다.");
        location.href = '/';

        this.cookie.delete_cookie('id_token');
        this.cookie.delete_cookie('type');
        this.cookie.delete_cookie('user_id');
    }

    private handleError(error) {
        console.error('Error processing action', error);
    }
}
