import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  registerForm = { name: '', username: '', password: '', email: '' };
  constructor(private auth: AuthService, private router: Router) {}
  registerUser() {
    this.auth
      .register(
        this.registerForm.name,
        this.registerForm.username,
        this.registerForm.password,
        this.registerForm.email
      )
      .subscribe({
        next: (res) => {
          this.router.navigate([`/login`]);
        },
        error: (err) => console.log(err),
        complete: () => console.log('login completed'),
      });
  }
}
