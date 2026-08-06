import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState } from 'src/app/app.store'; 

export const authGuard: CanActivateFn = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select((state) => state.auth).pipe(
    take(1), // Complete the observable after checking the current state once
    map((auth) => {
      // If user profile exists (or if user.user exists in wrapped state), allow access
      if (auth.user) {
        console.log("-----------")
        return true;
      }else{
        console.log("+++++++++++++" + auth.user)
        return true;
      }

      // If user profile is missing, redirect to login page
      return router.createUrlTree(['/login']);
    })
  );
};