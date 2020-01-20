import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const storage = JSON.parse(localStorage.getItem('token')) || null;
    if (storage && storage.token)
      return true;
    else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
