System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var favComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            favComponents = (function () {
                function favComponents() {
                    this.x = 10;
                    this.isFav = true;
                    this.change = new core_1.EventEmitter();
                }
                favComponents.prototype.onClick = function (isFav) {
                    if (isFav) {
                        this.isFav = !this.isFav;
                        this.x = ++(this.x);
                    }
                    else {
                        this.isFav = !this.isFav;
                        this.x = --(this.x);
                    }
                    this.change.emit({ v: this.isFav });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], favComponents.prototype, "x", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], favComponents.prototype, "isFav", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], favComponents.prototype, "change", void 0);
                favComponents = __decorate([
                    core_1.Component({
                        selector: 'fav',
                        template: "\n    <i class= \"glyphicon\" \n               [class.glyphicon-star-empty]=\"isFav\"\n               [class.glyphicon-star]= \"!isFav\"\n               (click) = \"onClick(isFav)\" ></i>{{x}}\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], favComponents);
                return favComponents;
            }());
            exports_1("favComponents", favComponents);
        }
    }
});
//# sourceMappingURL=fav.component.js.map