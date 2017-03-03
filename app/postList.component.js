System.register(['angular2/core', './userDetails.service'], function(exports_1, context_1) {
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
    var core_1, userDetails_service_1;
    var postList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userDetails_service_1_1) {
                userDetails_service_1 = userDetails_service_1_1;
            }],
        execute: function() {
            postList = (function () {
                function postList(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                    this.isVisible = false;
                }
                postList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getPostList()
                        .subscribe(function (list) {
                        _this.list = list;
                        _this.isLoading = false;
                    });
                };
                postList.prototype.onClick = function (detail) {
                    var _this = this;
                    this.isVisible = true;
                    this.x = detail;
                    console.log(this.x);
                    this._userService.getPostComments(detail.id)
                        .subscribe(function (Comments) {
                        _this.Comments = Comments;
                    });
                };
                postList = __decorate([
                    core_1.Component({
                        template: "<div class=\"row\">\n    <div class=\"col-md-6\">\n            <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n                <ul class=\"list-group\">\n                        <li *ngFor=\"#li of list\" class=\"list-group-item\" (click)= \"onClick(li)\" >{{li.title}}</li>\n                </ul>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"isVisible\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">{{x.title}}</h3>\n                    </div>\n                        <div class=\"panel-body\">{{x.body}}</div>\n                </div>\n                <div class=\"media\" *ngFor=\"#comment of Comments\">\n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                        <img class=\"media-object\" src=\"http://lorempixel.com/80/80/people/{{comment.id}}\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{comment.name}}</h4>\n                        {{comment.body}}\n                    </div>\n                </div>\n    </div>\n    </div>            "
                    }), 
                    __metadata('design:paramtypes', [userDetails_service_1.userService])
                ], postList);
                return postList;
            }());
            exports_1("postList", postList);
        }
    }
});
//# sourceMappingURL=postList.component.js.map