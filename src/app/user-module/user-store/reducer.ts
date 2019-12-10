import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { initialState, State } from './state';

const r = createReducer(
    initialState,
    on(Actions.userRequest, state => ({ ...state, isLoading: true })),
    on(Actions.userRequestSuccess, (state, { user }) => ({ ...state, user,  isLoading: false })),
    on(Actions.userRequestFailure, (state, { error }) => ({ ...state, error: error.message, isLoading: false }))
);

export function reducer(state: State, action: Action) {
    return r(state, action);
}
