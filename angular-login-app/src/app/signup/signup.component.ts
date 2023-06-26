import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }

    // Perform signup logic here
    const username = this.signupForm.value.username;
    const password = this.signupForm.value.password;

     // Prepare the login request payload
  const signupRequest = {
    username: username,
    password: password
  };
  this.http.post('http://localhost:8080/api/users', signupRequest).subscribe(
    (response: any) => {
      // Handle successful login response
      console.log('Login successful:', response);

      // Reset the form
      this.signupForm.reset();
    },
    (error: any) => {
      // Handle login error
      console.error('signup error:', error);
    }
  );

    // Example: Send signup request to the server
    console.log('Signup:', username, password);

    // Reset the form
    this.signupForm.reset();
    // Navigate to the documentation form component
    this.router.navigate(['/login']);
    console.log("Test");
    
  }
}


