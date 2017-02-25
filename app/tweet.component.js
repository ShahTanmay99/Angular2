System.register(['angular2/core', './tweet.service', './courses.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1, courses_service_1;
    var tweetComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            tweetComponents = (function () {
                function tweetComponents(_tweets) {
                    this._tweets = _tweets;
                    this.like = false;
                    this.Likes = 10;
                    this.myLike = 0;
                    this.x = 1;
                }
                tweetComponents.prototype.ngOnInit = function () {
                    this._tweets.getPosts().subscribe(function (data) {
                        console.log(data);
                    });
                    //console.log("Tweet Data :" ,this.tweet);
                    //this._tweets.createPosts({userId:2 ,title : 'cdsc', id : 3, body:'ssdv' });  
                };
                tweetComponents.prototype.onClick = function () {
                    if (this.like && this.myLike !== -1) {
                        this.like = !this.like;
                        this.myLike = -1;
                        this.Likes = this.myLike + this.Likes;
                    }
                    else if (!this.like && this.myLike !== 1) {
                        this.like = !this.like;
                        this.myLike = 1;
                        this.Likes = this.myLike + this.Likes;
                    }
                };
                tweetComponents = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "<div class=\"col-lg-6\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter number of posts you want...\" #posts (keyup) = \"0\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n      </span>\n  </div>\n</div>\n        <div class=\"media\">\n      <div class=\"media-left\">\n        <a href=\"#\">\n          <img class=\"media-object\" src=\"http://lorempixel.com/100/100/sports?1\">\n        </a>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\"></h4>\n        <i class= \"glyphicon hov\" [class.glyphicon-heart] = \"like\" [class.glyphicon-heart-empty] = \"!like\" (click) = onClick()></i>\n        {{Likes}}\n      </div>\n    </div>\n    ",
                        styles: [" \n            .hov{\n                cursor: pointer\n            }\n    "],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CourseService])
                ], tweetComponents);
                return tweetComponents;
            }());
            exports_1("tweetComponents", tweetComponents);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map