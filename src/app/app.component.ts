import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-site';
  showHeader:boolean = false;

  constructor(private router: Router,
    private authService: AuthenticationService) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log('this.router.url', this.router.url);
          this.showHeader = this.router.url !== '/login' && this.router.url !== '/' && this.router.url !== '/shopping' && this.router.url !== '/addtocart';
        }
      }
    );
  }

  ngOnInit(): void {
   
  }

  logout() {
    this.authService.logout();
  }
}
