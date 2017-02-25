import {Component} from 'angular2/core';

@Component({
    selector: 'form-component',
    templateUrl: `app/form.html`
})
export class formComponent {
    onSubmit(x){
        console.log(x);   
    }
 }
