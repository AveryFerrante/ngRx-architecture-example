import { createSelector, createFeatureSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { State } from './state';
import { User } from '../../models/user';

export const featureKey = 'user';

const getIsLoading = (state: State): boolean => state.isLoading;
const getUser = (state: State): User => state.user;
const getUserAge = (user: User): number | null => (user ? user.age : null);

export const selectUserState = createFeatureSelector<State>(featureKey);
export const selectUser = createSelector(
    selectUserState,
    getUser
);
export const selectUserIsLoading = createSelector(
    selectUserState,
    getIsLoading
);
export const selectUserAge = createSelector(
    selectUser,
    getUserAge
);
export const getAgeMultiplied = () =>
    createSelector(
        selectUser,
        (user: User, props: { factor: number }) => (user ? user.age * props.factor : null)
    );
