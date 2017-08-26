import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import * as web3 from 'Web3';

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

    createVote(name: String, description: String, capacity: number, candname:String[]) {
        let url = "http://dudgns05072.cafe24.com:3000/votes";
        let cand = "[";
        for (var i = 0; i < candname.length; i++) {
            cand += {
                "name": candname[i],
                "descript": ""
            }
        }
        cand += "]";

        let body = {
            "name": name,
            "descript": description,
            "capacity": capacity,
            "candidates": cand,
            "hasVerification": "true",
            "due": new Date()
        }

        console.log(body);
    }

    vote() {
        
        const contract_obj = {
            abi: [{ "constant": false, "inputs": [], "name": "getCandidates", "outputs": [{ "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "result", "outputs": [{ "name": "", "type": "uint8[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_candidates", "type": "bytes32[]" }], "name": "addCandidates", "outputs": [], "payable": true, "type": "function" }, { "constant": false, "inputs": [{ "name": "_no", "type": "uint8" }], "name": "vote", "outputs": [], "payable": false, "type": "function" }, { "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_candidates", "type": "bytes32[]" }], "payable": false, "type": "constructor" }],
            data: '0x60606040526000600860006101000a81548160ff021916908360ff1602179055506000600955341561003057600080fd5b6040516105f23803806105f2833981016040528080519060200190919080518201919050505b60008260008160001916905550600090505b81518160ff16101561014b576040805190810160405280838360ff1681518110151561009057fe5b90602001906020020151600019168152602001600060ff1681525060046000820151816000019060001916905560208201518160010160006101000a81548160ff021916908360ff1602179055509050506004600660008360ff1660ff168152602001908152602001600020600082015481600001906000191690556001820160009054906101000a900460ff168160010160006101000a81548160ff021916908360ff1602179055509050505b8080600101915050610068565b81516009819055505b5050505b61048b806101676000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306a49fce1461005f57806365372147146100ca5780636eab06c414610135578063b3f98adc14610184575b600080fd5b341561006a57600080fd5b6100726101aa565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100b65780820151818401525b60208101905061009a565b505050509050019250505060405180910390f35b34156100d557600080fd5b6100dd610249565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101215780820151818401525b602081019050610105565b505050509050019250505060405180910390f35b6101826004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506102f9565b005b341561018f57600080fd5b6101a8600480803560ff169060200190919050506103e7565b005b6101b2610437565b6101ba610437565b60006009546040518059106101cc5750595b908082528060200260200182016040525b509150600090505b60095481101561024057600660008260ff1660ff16815260200190815260200160002060000154828281518110151561021a57fe5b9060200190602002019060001916908160001916815250505b80806001019150506101e5565b8192505b505090565b61025161044b565b61025961044b565b600060095460405180591061026b5750595b908082528060200260200182016040525b509150600090505b6009548160ff1610156102f057600660008260ff1660ff16815260200190815260200160002060010160009054906101000a900460ff16828260ff168151811015156102cc57fe5b9060200190602002019060ff16908160ff16815250505b8080600101915050610284565b8192505b505090565b60008090505b81518160ff1610156103e2576040805190810160405280838360ff1681518110151561032757fe5b90602001906020020151600019168152602001600060ff1681525060046000820151816000019060001916905560208201518160010160006101000a81548160ff021916908360ff1602179055509050506004600660008360ff1660ff168152602001908152602001600020600082015481600001906000191690556001820160009054906101000a900460ff168160010160006101000a81548160ff021916908360ff1602179055509050505b80806001019150506102ff565b5b5050565b600660008260ff1660ff168152602001908152602001600020600101600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b50565b602060405190810160405280600081525090565b6020604051908101604052806000815250905600a165627a7a72305820e3312f48537ef38acc4eefc705f8ccc42c782adc52615c92b2cf530f08fa57fd0029',
            gas: '4070716'
        };
        
        let title = new web3().version.api;

        //var web3 = new web3();
        var web3_obj = new web3();

        //web3 객체를 만들어서 ethereum 노드에 접속하는 부분
        console.log(web3_obj);
        //console.log(web3);

        web3_obj.setProvider(new web3.providers.HttpProvider('http://dudgns05072.cafe24.com:8545'));
        //var web3 = require('./web3'); //web3도 마찬가지로 따로 빼는 것을 권장


        var contract_address = '0x247779d2c1c0cfb003d46b5a4785eaf68ccbabf9';
        //이건 투표마다 하나씩 있는거. 투표 정보 조회 API에서 contract_address 임. 
        var account_address = '0xeb59c4f7f467bc01a1a251c12d2e304032b4fff4';
        //이건 사용자의 계정주소. 이메일 인증하면 address를 줄거임. 그걸 사용해야함.

        var contract = web3_obj.eth.contract(contract_obj['abi']);
        var blote = contract.at(contract_address);

        console.log('executing vote function....');

        var voteData = blote.vote.getData(1); //이게 투표하는 부분. 0은 1번째 후보에 투표한다는거고, 1은 두번째 후보... 이런식으로 생각하면 됨
        web3_obj.eth.sendTransaction({ to: contract_address, from: account_address, data: voteData }, function (_erro, _respo) {
            if (_erro) {
                console.log("Error is " + _erro)
            } else {
                console.log("Transaction is=" + _respo); //_respo는 '0x989a4d86894c12b988fe2e67cb81d3730f98f1dc8dd5e98fda40457f597a2bbf' 이런 값이 나옴. 이건 트랜잭션 해시인데 이걸로 요청이 정상적인지 확인할 수 있음. 투표가 완료되면 이 해시를 보여주셈. 일종의 투표 증빙서 같은 역할을 하는 중요한 값임.
            }
        });

        //이건 결과 보는 부분 
        console.log('executing result function....');
        blote.result.call((err, result) => {
            console.log('result : ', result);
        })
        
    }
}