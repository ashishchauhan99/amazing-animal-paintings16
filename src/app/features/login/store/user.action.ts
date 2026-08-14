import { createAction, props } from '@ngrx/store';
import { UserAuthState } from '../../user/model/user.auth.state';
import { Credential } from '../model/credential';

// Dispatched by Login Component after receiving auth token
export const Login = createAction('[Auth] Login', props<{ credential: Credential }>());


// Dispatched by the Effect once user profile data is fetched from backend
export const LoadUserProfileSuccess = createAction(
  '[User API] Load User Profile Success',
  props<{ userAuthState: UserAuthState }>()
);

// Dispatched by the Effect if user profile can not be dispatched
export const LoadUserProfileFailure = createAction(
  '[User API] Load User Profile failure',
  props<{ userAuthState: UserAuthState }>()
);