System.register(['angular2/core', 'angular2/common', './usernameValidator', 'angular2/router', './userDetails.service', './user.class'], function(exports_1, context_1) {
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
    var core_1, common_1, usernameValidator_1, router_1, userDetails_service_1, user_class_1;
    var addUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidator_1_1) {
                usernameValidator_1 = usernameValidator_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userDetails_service_1_1) {
                userDetails_service_1 = userDetails_service_1_1;
            },
            function (user_class_1_1) {
                user_class_1 = user_class_1_1;
            }],
        execute: function() {
            addUserComponent = (function () {
                function addUserComponent(fb, _userservice, _router, _routeParams) {
                    this._userservice = _userservice;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_class_1.User();
                    this.form = fb.group({
                        fname: ['', common_1.Validators.required],
                        email: ['', usernameValidator_1.userValidator.isEmailValid],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                addUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? 'Edit User' : 'New User';
                    if (!id)
                        return;
                    this._userservice.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                addUserComponent.prototype.routerCanDeactivate = function (form) {
                    if (this.form.dirty)
                        return confirm("Are you sure?");
                };
                addUserComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        this._userservice.addUser(this.form.value)
                            .subscribe(function (x) {
                            _this._router.navigate(['User']);
                        });
                    }
                    else {
                        result = this._userservice.updateUser(this.user);
                    }
                };
                addUserComponent = __decorate([
                    core_1.Component({
                        selector: 'addUser',
                        templateUrl: 'app/users/addUserForm.html',
                        providers: [userDetails_service_1.userService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, userDetails_service_1.userService, router_1.Router, router_1.RouteParams])
                ], addUserComponent);
                return addUserComponent;
            }());
            exports_1("addUserComponent", addUserComponent);
        }
    }
});
//# sourceMappingURL=addUser.component.js.map