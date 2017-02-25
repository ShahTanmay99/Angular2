import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {userValidator} from './usernameValidator';

@Component({
    selector: 'change-password',
    templateUrl: 'app/changePassword.component.html'
})
export class changePwdComponent {
    // form = new ControlGroup({
    //     username : new Control('',Validators.required),
    //     password : new Control('', Validators.required)
    // });

    form : ControlGroup;
        constructor(fb : FormBuilder){
            this.form = fb.group({
                oldpwd: ['', Validators.compose([Validators.required])],
                newpwd: ['', Validators.compose([Validators.required,userValidator.confirmPassword])],
                confpwd: ['', Validators.compose([Validators.required,userValidator.confirmPassword])]
            })
        }

    onSubmit(){
        if(this.form.value.oldpwd != "1234"){
            this.form.find('oldpwd').setErrors({
                invalidUserName:true
            });
        }
        
    }
}