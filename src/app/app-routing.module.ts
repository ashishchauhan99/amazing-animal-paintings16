import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './features/login/login-view/login-view.component';
import { HomeViewComponent } from './features/home/home-view/home-view.component';
import { alreadyAuthGuard } from './core/already-auth.guard';


const routes: Routes = [// 1. Unprotected Full-Screen Page
  // 1. Login route protected so logged-in users get sent back to 'home'
  {
    path: 'login',
    component: LoginViewComponent,
    canActivate: [alreadyAuthGuard] // 👈 Prevents authenticated users from viewing login
  },

  // 2. Delegate all main app paths to CoreModule (Lazy Loaded)
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  /**
   * { 
     path: '', 
     redirectTo: 'home', 
     pathMatch: 'full' 
   },
   */


  // 3. Fallback / Wildcard Route  
  { 
    path: '**', 
    redirectTo: 'login' 
  }
   

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
