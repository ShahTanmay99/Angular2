System.register(['angular2/core', './userDetails.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, userDetails_service_1, router_1;
    var userComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userDetails_service_1_1) {
                userDetails_service_1 = userDetails_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            userComponent = (function () {
                function userComponent(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                }
                userComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getuserDetails().subscribe(function (details) {
                        _this.details = details;
                    });
                };
                userComponent.prototype.deleteUser = function (User) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete user " + User.name)) {
                        var i = this.details.indexOf(User);
                        this.details.splice(i, 1);
                        this._userService.deleteUser(User.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            // Revert the view back to its original state
                            // by putting the user object at the index
                            // it used to be.
                            _this.details.splice(i, 0, User);
                        });
                    }
                };
                userComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        template: "<h1>User</h1>\n    <a [routerLink]=\"['AddUser']\"><button type=\"button\" class=\"btn btn-primary\">Add User</button></a>\n    <table class=\"table table-bordered\">\n        <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Edit</th>\n            <th>Delete</th>\n        <tr>\n        <tr *ngFor= \"#detail of details\">\n            <td>{{detail.name}}</td>\n            <td>{{detail.email}}</td>\n            <td><i class=\"glyphicon glyphicon-edit\" [routerLink]=\"['EditUser',{id:detail.id}]\"></i></td>\n            <td><i class=\"glyphicon glyphicon-remove\" (click)= \"deleteUser(detail)\"></i></td>\n        <tr>\n    </table>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [userDetails_service_1.userService, router_1.Router])
                ], userComponent);
                return userComponent;
            }());
            exports_1("userComponent", userComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map