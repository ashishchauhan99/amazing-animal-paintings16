import { createReducer, on } from '@ngrx/store';
import { Login, LoadUserProfileSuccess, LoadUserProfileFailure } from './user.action';
import { UserAuthState } from '../model/user.auth.state';


export const initialState:UserAuthState = {
    user: null,
    userError: ''
};

export const AuthReducer = createReducer(
    initialState,
    on(LoadUserProfileSuccess, (state, { userAuthState }) => ({
        ...state,
        user: userAuthState.user,
        userError: userAuthState.userError
    })),

    on(LoadUserProfileFailure, (state, { userAuthState }) => ({
        ...state,
        user: userAuthState.user,
        userError: userAuthState.userError
    })),
);