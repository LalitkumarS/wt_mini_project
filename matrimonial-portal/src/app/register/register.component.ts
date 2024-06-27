import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordMismatch: boolean = false;

constructor(private fb: FormBuilder, private http: HttpClient) {
  this.registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });
}

ngOnInit(): void {
  this.registerForm.valueChanges.subscribe(() => {
    this.passwordMismatch = this.registerForm.value.password !== this.registerForm.value.confirmPassword;
  });
}

register() {
  if (this.registerForm.invalid || this.passwordMismatch) {
    return;
  }

  const user = {
    username: this.registerForm.value.username,
    email: this.registerForm.value.email,
    password: this.registerForm.value.password
  };

  this.http.post('http://localhost:3000/api/users/register', user)
    .subscribe(response => {
      console.log('User registered successfully', response);
    }, error => {
      console.error('Error registering user', error);
    });
 }
}