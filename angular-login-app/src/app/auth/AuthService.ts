import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
 // loginForm: any;

  constructor(private router: Router,private http: HttpClient) {}

  login(username: string, password: string): void {

     // Prepare the login request payload
  const loginRequest = {
    username: username,
    password: password
  };
 
    // Send the login request to the server
    this.http.post('http://localhost:8080/login', loginRequest).subscribe(
      (response: any) => {
        // Handle successful login response
        console.log('Login successful:');
  
        // Reset the form
       // this.loginForm.reset();
      },
      (error: any) => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
    // Perform authentication logic here (e.g., call REST API, validate credentials)
    // Set the loggedIn flag to true if authentication is successful
    if (username === 'raj123' && password === 'raj123') {
      this.loggedIn = true;
    }
  }

  logout(): void {
    // Perform logout logic here
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
