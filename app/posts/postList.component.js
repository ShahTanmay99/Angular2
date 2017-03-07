System.register(['angular2/core', '../users/userDetails.service', '../loadingIcon.component', '../pagination.component'], function(exports_1, context_1) {
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
    var core_1, userDetails_service_1, loadingIcon_component_1, pagination_component_1;
    var postList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userDetails_service_1_1) {
                userDetails_service_1 = userDetails_service_1_1;
            },
            function (loadingIcon_component_1_1) {
                loadingIcon_component_1 = loadingIcon_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            postList = (function () {
                function postList(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                    this.isLoad = true;
                    this.isVisible = false;
                    this.list = [];
                    this.pagedPosts = [];
                    this.pageSize = 10;
                }
                postList.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                postList.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.isLoading = true;
                    this._userService.getPostList(filter)
                        .subscribe(function (list) {
                        _this.list = list;
                        _this.pagedPosts = _this.getPostsInPage(1);
                    }, null, function () { _this.isLoading = false; });
                };
                postList.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getuserDetails()
                        .subscribe(function (user) {
                        _this.user = user;
                    });
                };
                postList.prototype.onClick = function (detail) {
                    var _this = this;
                    this.currentpost = null;
                    this.isVisible = true;
                    this.currentpost = detail;
                    this._userService.getPostComments(detail.id)
                        .subscribe(function (Comments) { return _this.currentpost.Comments = Comments; }, null, function () { _this.isLoad = false; });
                };
                postList.prototype.reload = function (x) {
                    this.currentpost = null;
                    this.isVisible = false;
                    this.loadPosts(x);
                };
                postList.prototype.onPageChanged = function (page) {
                    this.pagedPosts = this.getPostsInPage(page);
                };
                postList.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pageSize;
                    var endIndex = Math.min(startingIndex + this.pageSize, this.list.length);
                    for (var b = startingIndex; b < endIndex; b++)
                        result.push(this.list[b]);
                    return result;
                };
                postList = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/postList.html',
                        directives: [loadingIcon_component_1.loadIcon, pagination_component_1.PaginationComponent]
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