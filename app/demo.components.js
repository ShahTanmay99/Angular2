System.register(['angular2/core', './courses.service'], function(exports_1, context_1) {
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
    var core_1, courses_service_1;
    var CourseComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            CourseComponents = (function () {
                function CourseComponents(courseService) {
                    this.courseService = courseService;
                    this.courses = [];
                }
                CourseComponents.prototype.ngOnInit = function () {
                    this.courseService.createPosts({ userId: 2, title: 'cdsc', id: 3, body: 'ssdv' });
                };
                CourseComponents = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: " \n        "
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CourseService])
                ], CourseComponents);
                return CourseComponents;
            }());
            exports_1("CourseComponents", CourseComponents);
        }
    }
});
//# sourceMappingURL=demo.components.js.map