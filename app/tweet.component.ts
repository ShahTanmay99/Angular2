import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TweetService} from './tweet.service';
import {Post} from './post'
import {OnInit} from 'angular2/core';
import {CourseService} from './courses.service';

@Component({
    selector:'tweet',
    template:`<div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter number of posts you want..." #posts (keyup) = "0">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
  </div>
</div>
        <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object" src="http://lorempixel.com/100/100/sports?1">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading"></h4>
        <i class= "glyphicon hov" [class.glyphicon-heart] = "like" [class.glyphicon-heart-empty] = "!like" (click) = onClick()></i>
        {{Likes}}
      </div>
    </div>
    `,
    styles: [` 
            .hov{
                cursor: pointer
            }
    `],
    providers : [TweetService]
})
export class tweetComponents implements OnInit{
    like=false;
    Likes=10;
    myLike =0;
    x=1;

    constructor (private _tweets : CourseService){

    }
     ngOnInit(){
            this._tweets.getPosts().subscribe(data =>{
              console.log(data);
              }); 
            //console.log("Tweet Data :" ,this.tweet);
            //this._tweets.createPosts({userId:2 ,title : 'cdsc', id : 3, body:'ssdv' });  
  }
  onClick(){
      if(this.like && this.myLike !== -1){
            this.like=! this.like;
            this.myLike= -1;
            this.Likes = this.myLike + this.Likes;
      }
      else if(!this.like && this.myLike !== 1){
          this.like=! this.like;
            this.myLike= 1;
            this.Likes = this.myLike + this.Likes;
      }
  }
}