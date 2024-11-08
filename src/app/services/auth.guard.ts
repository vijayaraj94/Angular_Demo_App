import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( 
    private authService: AuthenticationService, 
    private router: Router) { } 
    canActivate( 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Promise<boolean> { 
        const isOk =  localStorage.getItem('access') === 'ok';
        var isAuthenticated = isOk;
        if (!isAuthenticated) { 
            this.router.navigate(['/login']); 
        } 
        return isAuthenticated; 
    } 

  
  
}
