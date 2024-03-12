import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup; // Declare loginForm as type FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    // Initialize the form and define controls
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], // The username field is required
      password: ['', Validators.required], // The password field is required
    });
  }

  loginUser() {
    console.log(this.loginForm.value);
    if (this.isValid()) {
      this.auth
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            console.log(response);
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', response.username);
            this.router.navigate([`/tasks`]);
          },
          error: (err) => {
            console.log(err);
            // Show error modal
            const modalRef = document.getElementById('loginErrorModal');
            if (modalRef) {
              (modalRef as HTMLDialogElement).showModal();
            }
          },
          complete: () => console.log('login completed'),
        });
    } else {
      alert('Please fill out all fields');
    }
  }
  close() {
    const dialog = document.getElementById(
      'loginErrorModal'
    ) as HTMLDialogElement;
    dialog.close();
  }

  private isValid() {
    return (
      (this.loginForm.value.username && this.loginForm.value.password) !== ''
    );
  }
}
