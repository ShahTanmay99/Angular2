import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector:'authors',
    template:`<ul>
                <li *ngFor="#b of authors">{{b}}</li>
              </ul>
    `,
    providers: [AuthorService]
})
export class AuthorComponents{
  authors;
  constructor (authorService : AuthorService){
      this.authors= authorService.getAuthors();
  }
}
