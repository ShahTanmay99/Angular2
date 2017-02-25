import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class userService{
    constructor(private _http:Http){

    }
    getuserDetails(){
       return this._http.get("https://jsonplaceholder.typicode.com/users")
        .map(res => res.json());
    }
}