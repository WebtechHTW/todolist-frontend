import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgbNavModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private authService: AuthService) {}

  logoutUser() {
    this.authService.logoutUser();
  }
  isLoggedIn() {
    return !!this.authService.loggedIn();
  }
  getUsername(){
    return localStorage.getItem("username");
  }
}
