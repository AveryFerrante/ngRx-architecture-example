import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, concatMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service.service';
import * as UserActions from './actions';
import { Store, select } from '@ngrx/store';
import { State } from './state';
import * as UserSelectors from './selectors';

@Injectable()
export class UserStoreEffects {
    constructor(private actions$: Actions, private userService: UserService, private store: Store<State>) {}

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.userRequest),
        concatMap(action => of(action).pipe(
            withLatestFrom(this.store.pipe(select(UserSelectors.selectUser)))
        )),
        switchMap(([action, user]) =>
        {
            if (user) {
                alert('A user has already been loaded, returning same user!');
                return of(UserActions.userRequestSuccess({ user }))
            } else {
                return this.userService.getUserByName(action.name).pipe(
                    map((user: User) => UserActions.userRequestSuccess({ user })),
                    catchError((error: Error) => of(UserActions.userRequestFailure({ error })))
                )
            }
        } 
        ))
    );
}
