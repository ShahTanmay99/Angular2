import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {userValidator} from './usernameValidator';


@Component({
    selector: 'addUser',
    templateUrl: 'app/addUserForm.html'
})
export class addUserComponent{
    form : ControlGroup;

    constructor(fb: FormBuilder){
        this.form=fb.group({
            fname:['',Validators.required],
            email:['', userValidator.isEmailValid],
            phone:[],
            street:[],
            suite: [],
            city: [],
            zipcode: []
        })
    }

}