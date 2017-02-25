import {Component} from 'angular2/core';
import {CourseService} from './courses.service';
import {OnInit} from 'angular2/core';
import {Post} from './post';
@Component({
    selector:'courses',
    template:` 
        `
})
export class CourseComponents implements OnInit{
  courses = [];
  constructor (private courseService : CourseService){
  }
  ngOnInit(){ 
            this.courseService.createPosts({userId:2 ,title : 'cdsc', id : 3, body:'ssdv' });  
          
  }
}
