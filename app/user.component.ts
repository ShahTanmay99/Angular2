import {Component} from 'angular2/core';
import {userService} from './userDetails.service';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
    selector: 'user',
    template: `<h1>User</h1>
    <a [routerLink]="['AddUser']"><button type="button" class="btn btn-primary">Add User</button></a>
    <table class="table table-bordered">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
        <tr>
        <tr *ngFor= "#detail of details">
            <td>{{detail.name}}</td>
            <td>{{detail.email}}</td>
            <td><i class="glyphicon glyphicon-edit" [routerLink]="['EditUser',{id:detail.id}]"></i></td>
            <td><i class="glyphicon glyphicon-remove" (click)= "deleteUser(detail)"></i></td>
        <tr>
    </table>`,
    directives: [ROUTER_DIRECTIVES]
})

export class userComponent implements OnInit{
        details : any[];
    constructor(private _userService: userService, private _router: Router){

    }
    ngOnInit(){
        this._userService.getuserDetails().subscribe(details => {
            this.details = details;
            });
    }
    deleteUser(User){
        if(confirm("Are you sure you want to delete user " + User.name)){
            var i= this.details.indexOf(User);
            this.details.splice(i,1);
            this._userService.deleteUser(User.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.details.splice(i, 0, User);
					});
        }
    }

        
}
