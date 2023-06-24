import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  http: any;

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
 
    // Send the login request to the server
    this.http.post('/login', loginRequest).subscribe(
      (response: any) => {
        // Handle successful login response
        console.log('Login successful:', response);
  
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
  

