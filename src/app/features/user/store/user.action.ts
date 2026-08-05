import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

// Dispatched by Login Component after receiving auth token
export const Login= createAction('[Auth] Login');

// Dispatched by the Effect once user profile data is fetched from backend
export const LoadUserProfileSuccess = createAction(
  '[User API] Load User Profile Success',
  props<{user:User}>()
);

// Dispatched by the Effect if user profile can not be dispatched
export const LoadUserProfileFailure = createAction(
  '[User API] Load User Profile failure',
  props<{error:string}>()
);