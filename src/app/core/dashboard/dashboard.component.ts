import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = this.authService.user; //pole user bo w authService ustawiono getter get user() {}

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit() : void {
    console.log(this.user?.email)
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login'])
        this.toast.open('User was successfuly logout', '', {panelClass: 'toast-success'})
      }
    )
  }
}
