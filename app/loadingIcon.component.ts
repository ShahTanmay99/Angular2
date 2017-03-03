import {Component, Input} from 'angular2/core'

@Component({
    selector:'Spinner',
    template: `<div *ngIf="visible"><i class="fa fa-spinner fa-spin fa-3x"></i></div>`
})

export class loadIcon{
    @Input() visible=true; 
}