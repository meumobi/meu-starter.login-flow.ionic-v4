import { AuthService } from './../core/auth/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authState$: Observable<boolean>;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authState$ = this.authService.getAuthStateObserver();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
		
  }
}
