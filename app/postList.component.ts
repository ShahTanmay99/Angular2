import {Component, OnInit} from 'angular2/core';
import {userService} from './userDetails.service';
import {loadIcon} from './loadingIcon.component';
import {posts} from './posts.class';

@Component({
    template: `<h1>Posts</h1>
            <div class="row">
                <div class="col-md-6">
                <select class="form-control" (change)="reload({userId: z.value})" #z>
                        <option value=""> SELECT USER </option>
                        <option *ngFor="#u of user" value="{{u.id}}">{{u.name}}</option>
                </select>

                            <Spinner [visible]= "isLoading"></Spinner>
                            <ul class="list-group lists">
                                <li *ngFor="#li of list" class="list-group-item" [class.active]="currentpost == li" (click)="onClick(li)">{{li.title}}</li>
                            </ul>
                </div>
                <div class="col-md-6" *ngIf="isVisible">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">{{currentpost.title}}</h3>
                                </div>
                                    <div class="panel-body">{{currentpost.body}}</div>
                            </div>
                            <Spinner [visible]= "isLoad"></Spinner>
                            <div class="media" *ngFor="#comment of currentpost.Comments">
                                <div class="media-left">
                                    <a href="#">
                                    <img class="media-object" src="http://lorempixel.com/80/80/people?random={{comment.id}}">
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">{{comment.name}}</h4>
                                    {{comment.body}}
                                </div>
                            </div>
                </div>
    </div>            `,
    directives:[loadIcon]
})

export class postList implements OnInit{

    constructor(private _userService: userService){

    }
    currentpost;
    isLoading=true;
    isLoad=true;
    isVisible=false;
    user: any[];
    list: any[];
     Id:any[];
    ngOnInit(){
         this.loadPosts();
         this.loadUsers();
    }
    private loadPosts(filter?){
        this.isLoading=true;
        this._userService.getPostList(filter)
         .subscribe(
             list => this.list=list,
             null,
         () => {this.isLoading=false});
        
    }
    private loadUsers(){
                this._userService.getuserDetails()
                        .subscribe(user =>{
                        this.user=user;
        });
    }

    onClick(detail){
        this.currentpost=null;
        this.isVisible=true;
        this.currentpost = detail;
        
        this._userService.getPostComments(detail.id)
        .subscribe(
            Comments => this.currentpost.Comments=Comments,
            null,
            () => {this.isLoad=false;}
        )  
    }
    reload(x){
        this.currentpost=null;
        this.isVisible=false;
        
         this.loadPosts(x);
    }
}

