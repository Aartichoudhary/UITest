import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { User } from './UserModel/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Observable<User[]>;
  title = 'UserTestUI';
  constructor(public router:Router,private store: Store<AppState>) {
    this.router=router;
    console.log(this.router.url);
    this.users = store.select('user');
   }
}
