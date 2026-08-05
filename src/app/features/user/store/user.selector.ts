import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserAuthState } from './user.reducer';

// 1. Feature Selector: Matches the key registered in StoreModule / AppState
export const selectAuthState = createFeatureSelector<UserAuthState>('auth');

// 2. Child Selector: Extracts the 'user' object specifically
export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: UserAuthState) => state.user
);
