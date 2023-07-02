import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './AuthService';
//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { LoginComponent } from '../login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
     this.router.navigate(['/login']);
      //this.authService.login(this.loginForm.value.username,this.loginForm.value.password);
      return false;
    }
  }
}
export { AuthService };

