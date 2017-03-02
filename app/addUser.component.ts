import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {userValidator} from './usernameValidator';
import {CanDeactivate, RouteParams, Router} from 'angular2/router';
import {userService} from './userDetails.service';
import {User} from './user.class';

@Component({
    selector: 'addUser',
    templateUrl: 'app/addUserForm.html',
    providers: [userService]
})
export class addUserComponent implements CanDeactivate, OnInit{
    form : ControlGroup;
    title : String;
    user = new User();
    constructor(fb: FormBuilder, private _userservice: userService,
                 private _router: Router,
                 private _routeParams: RouteParams){
                        this.form=fb.group({
                            fname:['',Validators.required],
                            email:['', userValidator.isEmailValid],
                            phone:[],
                            address: fb.group({
                                street:[],
                                suite: [],
                                city: [],
                                zipcode: []
            })
        })
    }
    ngOnInit(){
        
            var id = this._routeParams.get("id");  
            this.title = id ? 'Edit User': 'New User';


            if(!id)
                return;

            this._userservice.getUser(id)
            .subscribe(
                user=>this.user=user,
                response => {
                    if(response.status==404){
                        this._router.navigate(['NotFound'])
                    }
                }           
            )
    }
    routerCanDeactivate(form){
        if(this.form.dirty)
            return confirm("Are you sure?");
    }
    save(){
        var result;
        if(this.user.id){
                        this._userservice.addUser(this.form.value)
                        .subscribe(x => {
                        this._router.navigate(['User']);
        })
        }
        else{
           result= this._userservice.updateUser(this.user);

    }

}
}