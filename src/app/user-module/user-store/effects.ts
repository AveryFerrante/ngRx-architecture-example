import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user-service.service';
import * as UserActions from './actions';
import { User } from '../../models/user';

@Injectable()
export class UserStoreEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.userRequest),
        switchMap(action =>
            this.userService.getUserByName(action.name).pipe(
                map((user: User) => UserActions.userRequestSuccess({ user })),
                catchError((error: Error) => of(UserActions.userRequestFailure({ error })))
            )
        ))
    );
}
