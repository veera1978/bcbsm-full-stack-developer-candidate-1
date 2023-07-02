import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private http: HttpClient,private authService: AuthService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

  // Perform login logic here
  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;

  // Prepare the login request payload
  const loginRequest = {
    username: username,
    password: password
  };
 
  this.authService.login(username,password);
    // Send the login request to the server
    this.http.post('http://localhost:8080/login', loginRequest).subscribe(
      (response: any) => {
        // Handle successful login response
        console.log('Login successful:');
  
        // Reset the form
        this.loginForm.reset();
      },
      (error: any) => {
        // Handle login error
        console.error('Login error:', error);
      }
    );

  // Example: Send login request to the server
  console.log('Login:', username, password);

   // Navigate to the documentation form component
   this.router.navigate(['/documentation-form']);
  }

    
  }
  

