import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      this.router.navigate(['/login'])
      this.toast.open('You are not authorized to see this page. Please log in.', '', {panelClass: 'toast-failure'})
      return false;
  }

}
