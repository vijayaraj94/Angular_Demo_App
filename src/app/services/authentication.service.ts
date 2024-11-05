import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn:boolean = false;
  redirectUrl: string | null = null;

  constructor(private route: Router) { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    localStorage.removeItem('access');
    this.route.navigate(['/']);
  }
  
}
