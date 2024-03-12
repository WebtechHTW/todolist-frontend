import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
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
  registerForm: FormGroup;
  errorMsg: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    // Initialize the form and define controls
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }
  registerUser() {
    if (this.isValid()) {
      this.auth
        .register(
          this.registerForm.value.name,
          this.registerForm.value.username,
          this.registerForm.value.password,
          this.registerForm.value.email
        )
        .subscribe({
          next: (res) => {
            this.router.navigate([`/login`]);
          },
          error: (err) => {
            console.log(err);
            // Show error modal
            console.log(err.error.message);
            this.errorMsg = err.error.message;
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
      (this.registerForm.value.name &&
        this.registerForm.value.username &&
        this.registerForm.value.password &&
        this.registerForm.value.email) !== ''
    );
  }
}
