import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  login(username: any, password: any) {
    return this.http.post<any>(`${this.baseURL}/login`, { username, password });
  }
  register(name: any, username: any, password: any, email: any) {
    return this.http.post<any>(`${this.baseURL}/register`, {
      name,
      username,
      password,
      email,
    });
  }
}
