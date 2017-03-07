System.register(['angular2/core', './navbar.component', './users/user.component', './home.component', './users/userDetails.service', './users/addUser.component', 'angular2/router', './posts/postList.component', './NotFound'], function(exports_1, context_1) {
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
    var core_1, navbar_component_1, user_component_1, home_component_1, userDetails_service_1, addUser_component_1, router_1, postList_component_1, NotFound_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (userDetails_service_1_1) {
                userDetails_service_1 = userDetails_service_1_1;
            },
            function (addUser_component_1_1) {
                addUser_component_1 = addUser_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (postList_component_1_1) {
                postList_component_1 = postList_component_1_1;
            },
            function (NotFound_1_1) {
                NotFound_1 = NotFound_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.homeComponent, useAsDefault: true },
                        { path: '/user', name: 'User', component: user_component_1.userComponent },
                        { path: '/user/:id', name: 'EditUser', component: addUser_component_1.addUserComponent },
                        { path: '/addUser', name: 'AddUser', component: addUser_component_1.addUserComponent },
                        { path: '/post', name: 'Post', component: postList_component_1.postList },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] },
                        { path: '/user/*other', name: 'NotFound', component: NotFound_1.notFound }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "<navbar></navbar>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.navbarComponent],
                        providers: [userDetails_service_1.userService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map