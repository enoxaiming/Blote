import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class VoteService {

    constructor(private http: Http) {

    }

    //인증메일 보내기
    mailCall(email: String) {
        console.log(email);
        let url = "http://dudgns05072.cafe24.com:3000/votes/verify";
        let body = {
            "email": email
        }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(url, body, options)
            .map(res => res.json());
    }

    //인증메일 키 체크
    emailVerify(email: String, key: String) {
        let url = "http://dudgns05072.cafe24.com:3000/votes/verify";
        let body = {
            "email": email,
            "key": key
        }
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        });

        return this.http.put(url, body, options)
            .map(res => res.json());
    }
}