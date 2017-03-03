System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var userService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            userService = (function () {
                function userService(_http) {
                    this._http = _http;
                    this._url = "https://jsonplaceholder.typicode.com/users";
                    this._url2 = "https://jsonplaceholder.typicode.com/posts";
                }
                userService.prototype.getuserDetails = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.addUser = function (user) {
                    return this._http.post(this._url, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.getUser = function (id) {
                    return this._http.get(this.getUserUrl(id))
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.updateUser = function (user) {
                    return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.getUserUrl = function (id) {
                    return this._url + "/" + id;
                };
                userService.prototype.getCommentUrl = function (id) {
                    return this._url2 + "/" + id + "/comments";
                };
                userService.prototype.deleteUser = function (User) {
                    return this._http.delete(this.getUserUrl(User))
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.getPostList = function () {
                    return this._http.get(this._url2)
                        .map(function (res) { return res.json(); });
                };
                userService.prototype.getPostComments = function (id) {
                    return this._http.get(this.getCommentUrl(id))
                        .map(function (res) { return res.json(); });
                };
                userService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], userService);
                return userService;
            }());
            exports_1("userService", userService);
        }
    }
});
//# sourceMappingURL=userDetails.service.js.map