import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const userRequest = createAction('[User] Request', props<{ name: string }>());
export const userRequestSuccess = createAction('[User] Request Success', props<{ user: User }>());
export const userRequestFailure = createAction('[User] Request Failure', props<{ error: Error }>());
