import {Component, OnInit} from 'angular2/core';
import {userService} from './userDetails.service';
@Component({
    template: `<div class="row">
    <div class="col-md-6">
            <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
                <ul class="list-group">
                        <li *ngFor="#li of list" class="list-group-item" (click)= "onClick(li)" >{{li.title}}</li>
                </ul>
    </div>
    <div class="col-md-6" *ngIf="isVisible">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{x.title}}</h3>
                    </div>
                        <div class="panel-body">{{x.body}}</div>
                </div>
                <div class="media" *ngFor="#comment of Comments">
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object" src="http://lorempixel.com/80/80/people/{{comment.id}}">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{comment.name}}</h4>
                        {{comment.body}}
                    </div>
                </div>
    </div>
    </div>            `
})

export class postList implements OnInit{
    constructor(private _userService: userService){

    }
    x;
    isLoading=true;
    isVisible=false;
    list: any[]
    Comments: any[]
    ngOnInit(){
        this._userService.getPostList()
        .subscribe(list => {
            this.list=list;
            this.isLoading=false;
        });
    }
    onClick(detail){
        this.isVisible=true;
        this.x = detail;
        console.log(this.x);
        
        this._userService.getPostComments(detail.id)
        .subscribe(Comments => {
            this.Comments=Comments;
        })  
        
    }
}

