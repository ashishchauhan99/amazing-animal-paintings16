import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

export const alreadyAuthGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select((state) => state.auth).pipe(
    take(1),
    map((auth) => {
      // If user IS logged in, redirect them away from /login to /home
      if (auth?.user) {
        return router.createUrlTree(['/home']);
      }
      
      // If NOT logged in, let them access the login page
      return true;
    })
  );
};