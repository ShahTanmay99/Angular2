
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService{
  constructor(private http : Http){
    console.log("Hello from Service");
  }
  getPosts() : Observable <Post[]> {
   return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .map((response:Response) => response.json());
  }
  createPosts(post: Post){
   return this.http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(post))
    .map((response:Response) => response.json());
  }
}
