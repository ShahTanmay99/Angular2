import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.html',
    directives: [ROUTER_DIRECTIVES]
})
export class navbarComponent {
    constructor(private _router: Router){
    }

    isActive(x){
        var x1= this._router.generate(x);
        return this._router.isRouteActive(x1);
    }
    
 }
