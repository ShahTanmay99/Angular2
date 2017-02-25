import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'fav',
    template:`
    <i class= "glyphicon" 
               [class.glyphicon-star-empty]="isFav"
               [class.glyphicon-star]= "!isFav"
               (click) = "onClick(isFav)" ></i>{{x}}
    `
})
export class favComponents{
   @Input() x=10;
   @Input() isFav=true;
   @Output() change= new EventEmitter();

   onClick(isFav){
       if(isFav){
           this.isFav=!this.isFav;
           this.x = ++ (this.x);
       }
       else{
           this.isFav=!this.isFav;
           this.x = -- (this.x);
       }
       this.change.emit({v : this.isFav});
   }

}