import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'child',
    template:`<h3>Child</h3>
                <input type = "text" #ref (keyup) = onClick(ref.value)>
                <h1>Parent Text</h1>{{parenttext}}
    `
})
export class childComponents{

    @Input() parenttext;
    @Output() childtext = new EventEmitter();
    onClick(a){
        this.childtext.emit(a);
    }
}