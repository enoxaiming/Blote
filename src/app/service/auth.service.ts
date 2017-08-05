import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from "@angular/http";
import {Router} from '@angular/router';

import {CookieService} from './cookie.service';

import 'rxjs/add/operator/map';

import * as web3 from 'Web3';




@Injectable()
export class AuthService {

    constructor(private http: Http, private router: Router, private cookie:CookieService) { }

    login(email: String, password: String, autoLogin: boolean) {
        let url = "http://ec2-54-190-7-146.us-west-2.compute.amazonaws.com:5000/api/v1/auth";
        let body = "email=" + email + "&password=" + password;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("Response : " + res.data.token);

                this.cookie.setCookie('id_token',res.data.token,1);
                this.cookie.setCookie('user_id', res.data.user_id,1);

                location.href = '/home';
            },

            error => {
                if(error.json().code == 400) {
                    alert("일치하는 정보가 없습니다.");
                }
            }
            );
    }

    loggedIn() {
        console.log('checking token!!');

        //Default isValie = true
        let isValid: boolean = true;

        //look for token
        //var sessionToken = sessionStorage.getItem('id_token');
        var token = this.cookie.getCookie('id_token');
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
    }
}
