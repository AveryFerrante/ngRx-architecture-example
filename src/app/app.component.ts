import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from './models/user';
import {
  RootStoreState,
  UserStoreActions,
  UserStoreSelectors
} from './root-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.user$ = this.store$.pipe(
      select(UserStoreSelectors.selectUser)
    );

    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserIsLoading),
      tap((value) => console.log('isloading value change detected. Value is: ', value))
    );
  }

  searchUsers(userSearch: string) {
    this.store$.dispatch(UserStoreActions.userRequest({ name: userSearch }));
  }

}
