import {Component} from 'angular2/core';
import {userService} from './userDetails.service';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'edit_user',
    templateUrl: 'app/addUserForm.html',
    directives: [ROUTER_DIRECTIVES]
})

export class editUserComponent implements OnInit{
        details : any[];
        x :true;
    constructor(private _userService: userService){

    }
    ngOnInit(){
        this._userService.getuserDetails().subscribe(details => {
            this.details = details;
            });
    }
        
}
