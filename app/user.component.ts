import {Component} from 'angular2/core';
import {userService} from './userDetails.service';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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
            <td><i class="glyphicon glyphicon-edit"></i></td>
            <td><i class="glyphicon glyphicon-remove"></i></td>
        <tr>
    </table>`,
    directives: [ROUTER_DIRECTIVES]
})

export class userComponent implements OnInit{
        details : any[];
    constructor(private _userService: userService){

    }
    ngOnInit(){
        this._userService.getuserDetails().subscribe(details => {
            this.details = details;
            });
    }
        
}
