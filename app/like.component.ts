import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'like',
    template:`<div width=20px>
    <i class= "glyphicon glyphicon-menu-up" [class.highlight] = "myVote == 1" (click) = upClick() ></i>
        <span> {{Total}} </span>
    <i class= "glyphicon glyphicon-menu-down" [class.highlight] = "myVote == -1" (click)=downClick()></i>
    <div>
    `,
    styles: [` 
    .highlight{
        color: red;
        cursor: pointer
    }                   
    `]
})
export class likeComponents{
   @Input() Total=20;
   @Input() myVote = 0;
   @Output() TotalVote = new EventEmitter();
    upClick(){
        if(this.myVote==1)
            return;
        
        this.myVote = 1;
        this.TotalVote.emit(this.myVote+this.Total);

    }
    downClick(){
        if(this.myVote== -1)
            return;
        this.myVote = -1;
    }
}