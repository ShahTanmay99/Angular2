import {Component, OnInit} from 'angular2/core';
import {userService} from '../users/userDetails.service';
import {loadIcon} from '../loadingIcon.component';
import {PaginationComponent} from '../pagination.component';

@Component({
    templateUrl:'app/posts/postList.html', 
    directives:[loadIcon,PaginationComponent]
})

export class postList implements OnInit{

    constructor(private _userService: userService){

    }
    currentpost;
    isLoading=true;
    isLoad=true;
    isVisible=false;
    user: any[];
    list=[];
    pagedPosts = [];
    pageSize = 10;
    ngOnInit(){
         this.loadPosts();
         this.loadUsers();
    }
    private loadPosts(filter?){
        this.isLoading=true;
        this._userService.getPostList(filter)
         .subscribe(
             list => {this.list=list;
             this.pagedPosts = this.getPostsInPage(1);
            },
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
    onPageChanged(page) {
        this.pagedPosts = this.getPostsInPage(page);
	}
    
    private getPostsInPage(page){
        var result = [];
		var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.list.length);

        for (var b = startingIndex; b < endIndex; b++)
            result.push(this.list[b]);
            
        return result;
    }
}

