import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { Login } from '../../user/store/user.action';
import { UserService } from '../../user/user.service';
import { User } from '../../user/model/user';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({});;
  hidePassword = true;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Payload:', this.loginForm.value);
      // Dispatch your NgRx action or call your auth service here

      this.store.dispatch(Login(
        {
          credential: {
            username: this.loginForm.value.email,
            password: this.loginForm.value.password
          }
        }
      ));
    }
  }

  ngOnInit(): void {
    // 1. Call the service method and subscribe
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        console.log('Fetched Users Successfully:', users);
        
        // Example: Print individual user names
        users.forEach(user => console.log(`User: ${user.name} (${user.username})`));
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
      },
      complete: () => {
        console.log('User stream completed.');
      }
    });
  }
}