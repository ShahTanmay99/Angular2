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
    var likeComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            likeComponents = (function () {
                function likeComponents() {
                    this.Total = 20;
                    this.myVote = 0;
                    this.TotalVote = new core_1.EventEmitter();
                }
                likeComponents.prototype.upClick = function () {
                    if (this.myVote == 1)
                        return;
                    this.myVote = 1;
                    this.TotalVote.emit(this.myVote + this.Total);
                };
                likeComponents.prototype.downClick = function () {
                    if (this.myVote == -1)
                        return;
                    this.myVote = -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], likeComponents.prototype, "Total", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], likeComponents.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], likeComponents.prototype, "TotalVote", void 0);
                likeComponents = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "<div width=20px>\n    <i class= \"glyphicon glyphicon-menu-up\" [class.highlight] = \"myVote == 1\" (click) = upClick() ></i>\n        <span> {{Total}} </span>\n    <i class= \"glyphicon glyphicon-menu-down\" [class.highlight] = \"myVote == -1\" (click)=downClick()></i>\n    <div>\n    ",
                        styles: [" \n    .highlight{\n        color: red;\n        cursor: pointer\n    }                   \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], likeComponents);
                return likeComponents;
            }());
            exports_1("likeComponents", likeComponents);
        }
    }
});
//# sourceMappingURL=like.component.js.map