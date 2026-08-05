import { createReducer, on } from '@ngrx/store';
import { Login, LoadUserProfileSuccess, LoadUserProfileFailure } from './user.action';
import { User } from 'src/app/models/user';

export interface UserAuthState {
    user: User | null;
}

export const initialState: UserAuthState = {
    user: null
};

export const AuthReducer = createReducer(
    initialState,
    on(LoadUserProfileSuccess, (state, { user }) => ({
        ...state,
        user: user // Save user profile in global state
    })),

    on(LoadUserProfileFailure, (state, { error }) => ({
        ...state,
        error: error // Save user profile in global state
    })),
);