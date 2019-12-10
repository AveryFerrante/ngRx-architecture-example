import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';
import { User } from '../../models/user';

export const featureKey = 'user';

const getIsLoading = (state: State): boolean => state.isLoading;
const getUser = (state: State): User => state.user;

export const selectUserState = createFeatureSelector<State>(featureKey);
export const selectUser = createSelector(
    selectUserState,
    getUser
);
export const selectUserIsLoading = createSelector(
    selectUserState,
    getIsLoading
);
