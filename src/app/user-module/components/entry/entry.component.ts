import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store, select } from '@ngrx/store';
// Can import from User-Store or from Root-Store since both export the State/Selectors/Actions
import { UserStoreState, UserStoreSelectors, UserStoreActions } from '../../user-store';
import { RootStoreState } from '../../../root-store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  user$: Observable<User>;
  isLoading$: Observable<boolean>;
  userAge$: Observable<number>;
  userState$: Observable<UserStoreState.State>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.user$ = this.store$.pipe(
      select(UserStoreSelectors.selectUser)
    );

    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserIsLoading)
    );

    this.userAge$ = this.store$.pipe(
      select(UserStoreSelectors.getAgeMultiplied(), { factor: 10 })
    );

    this.userState$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserState)
    );
  }

  searchUsers(userSearch: string) {
    this.store$.dispatch(UserStoreActions.userRequest({ name: userSearch }));
  }

}
