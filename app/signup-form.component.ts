import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {userValidator} from './usernameValidator';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    // form = new ControlGroup({
    //     username : new Control('',Validators.required),
    //     password : new Control('', Validators.required)
    // });

    form : ControlGroup;
        constructor(fb : FormBuilder){
            this.form = fb.group({
                username: ['', Validators.compose([Validators.required, userValidator.noSpace]), userValidator.uniqueName],
                password: ['', Validators.compose([Validators.required, userValidator.noSpace])]
            })
        }

    onSubmit(){
        console.log(this.form.value);
    }
}