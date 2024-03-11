import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  private baseURL = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllTasks(username: string) {
    return this.http.get<Task[]>(`${this.baseURL}/${username}`);
  }

  deleteAllTasks(username: string) {
    return this.http.delete(`${this.baseURL}/${username}`);
  }

  addNewTask(newTask: Task, username: string) {
    return this.http.post(`${this.baseURL}/${username}`, newTask);
  }

  getTaskByID(username: string, id: string) {
    return this.http.get<Task>(`${this.baseURL}/${username}/${id}`);
  }

  deleteTaskByID(username: string, id: string) {
    return this.http.delete(`${this.baseURL}/${username}/${id}`);
  }

  updateTaskByID(updatedTask: Task, username: string, id: string) {
    return this.http.put(`${this.baseURL}/${username}/${id}`, updatedTask);
  }

  getUsername() {
    return localStorage.getItem('username') ?? '';
  }
}
