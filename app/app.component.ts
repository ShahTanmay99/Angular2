import {Component} from 'angular2/core';
import {navbarComponent} from './navbar.component';
import {userComponent} from './user.component';
import {homeComponent} from './home.component';
import {userService} from './userDetails.service';
import {addUserComponent} from './addUser.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {postList} from './postList.component';
import {notFound} from './NotFound';

@RouteConfig([
    {path:'/', name:'Home', component:homeComponent, useAsDefault:true},
    {path:'/user', name: 'User', component: userComponent},
    {path:'/user/:id', name: 'EditUser', component: addUserComponent},
    {path:'/addUser', name: 'AddUser', component: addUserComponent},
    {path: '/post' , name: 'Post', component: postList},
    {path: '/*other', name: 'Other', redirectTo: ['Home']},
    {path:'/user/*other', name: 'NotFound', component: notFound}
])
@Component({
    selector: 'my-app',
    template: `<navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>`,
    directives: [ROUTER_DIRECTIVES, navbarComponent],
    providers: [userService]
})
export class AppComponent{
    
 }
