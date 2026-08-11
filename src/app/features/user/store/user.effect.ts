// src/app/features/user/store/user.effect.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Login, LoadUserProfileSuccess, LoadUserProfileFailure } from './user.action';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private router: Router
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            // 1. Listen specifically for the Login action
            ofType(Login),

            // 2. Call the HTTP service when Login is dispatched
            switchMap(action =>
                this.userService.getUsers().pipe(
                    map(users => {
                        // 3. Search for matching username & password in the returned list
                        users.forEach(u => console.log("++++++++++++" + u.username + " ---- " + u.password));
                        //console.log("++++++++++++" + action.credential.username + " ---- " + action.credential.password);
                        const matchedUser = users.find(
                            user =>
                                user.username === action.credential.username &&
                                user.password === action.credential.password
                        );

                        // 4. Return Success if user exists, else return Failure
                        if (matchedUser) {
                            return LoadUserProfileSuccess({
                                userAuthState: {
                                    user: matchedUser,
                                    userError: ''
                                }
                            });
                        } else {
                            return LoadUserProfileFailure({
                                userAuthState: {
                                    user: null,
                                    userError: 'invalid username or password' // Empty string since there is no error
                                }
                            });
                        }
                    }),

                    // 5. Catch HTTP API level errors (e.g., 500, 404 network failure)
                    catchError(error =>
                        of(LoadUserProfileFailure({
                            userAuthState: {
                                    user: null,
                                    userError: error.message || 'Server connection failed'
                                }
                            }))
                    )
                )
            )
        )
    );

    // 2. Navigation Effect: Redirects to /home upon successful profile load
    /**
     * loginSuccessRedirect$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(LoadUserProfileSuccess),
                tap((action) => {
                    console.log('############ Effect triggered with action:', action);
                    this.router.navigate(['/home']); // 👈 Navigate to /home
                })
            ),
        { dispatch: false } // 👈 REQUIRED: Tells NgRx this effect does not return a new action
    );
     */
    

}