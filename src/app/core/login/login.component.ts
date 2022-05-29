import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: '',
  }

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService,
  ) { }

  login() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => this.toast.open(err.message, '', { panelClass: 'toast-failure'}))
  }

  register() {
    this.authService.register(this.credentials)
      .then(() => this.toast.open('The user was successfuly registered. Now, please log in', '', {panelClass: 'toast-success'}))
      .catch(err => this.toast.open(err.message, '', { panelClass: 'toast-failure'}))
  }

}
