import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = { username: '', password: '' };
  constructor(private auth: AuthService, private router: Router) {}
  loginUser() {
    this.auth
      .login(this.loginForm.username, this.loginForm.password)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate([`/${this.loginForm.username}/tasks`]);
        },
        error: (err) => console.log(err),
        complete: () => console.log('login completed'),
      });
  }
}
