import {Component, OnInit} from 'angular2/core';
import {userService} from './userDetails.service';
@Component({
    template: `<div class="row">
    <div class="col-md-6">
            <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
                <ul *ngFor="#li of list" class="list-group">
                        <li class="list-group-item">{{li.body}}</li>
                </ul>
            </div>
    </div>
                `
})

export class postList implements OnInit{
    constructor(private _userService: userService){

    }
    isLoading=true;
    list: any[]
    ngOnInit(){
        this._userService.getPostList()
        .subscribe(list => {
            this.list=list;
            this.isLoading=false;
        });
    }
}

