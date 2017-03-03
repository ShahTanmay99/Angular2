import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class userService{
     _url = "https://jsonplaceholder.typicode.com/users";
     _url2="https://jsonplaceholder.typicode.com/posts";
    constructor(private _http:Http){
    }
    getuserDetails(){
       return this._http.get(this._url)
        .map(res => res.json());
    }
    addUser(user){
        return this._http.post(this._url,JSON.stringify(user))
        .map(res => res.json());
    }
    getUser(id){
        return this._http.get(this.getUserUrl(id))
        .map(res => res.json());
    }
    updateUser(user){
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
        .map(res => res.json());
    }
    private getUserUrl(id){
        return this._url+"/"+id;
    }
    private getCommentUrl(id){
        return this._url2+"/"+id+"/comments";
    }
    deleteUser(User){
        return this._http.delete(this.getUserUrl(User))
        .map(res => res.json())
    }
    getPostList(){
        return this._http.get(this._url2)
        .map(res => res.json());
    }
    getPostComments(id){
        return this._http.get(this.getCommentUrl(id))
        .map(res => res.json());
    }
}