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
    var editUserComponent;
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
            editUserComponent = (function () {
                function editUserComponent(_userService) {
                    this._userService = _userService;
                    this.x = true;
                }
                editUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getuserDetails().subscribe(function (details) {
                        _this.details = details;
                    });
                };
                editUserComponent = __decorate([
                    core_1.Component({
                        selector: 'edit_user',
                        templateUrl: 'app/addUserForm.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [userDetails_service_1.userService])
                ], editUserComponent);
                return editUserComponent;
            }());
            exports_1("editUserComponent", editUserComponent);
        }
    }
});
//# sourceMappingURL=editUser.component.js.map