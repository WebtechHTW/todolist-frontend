import { Component } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TaskService } from '../../shared/services/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private taskService: TaskService, private router: Router) {}

  task: Task = {
    _id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false,
  };

  addTask(task: Task) {
    // Validate the task object before sending for addition
    if (task.title.trim() === '' || task.dueDate === null) {
      console.error('Task title and due date are required.');
      return;
    }

    this.taskService
      .addNewTask(task, this.taskService.getUsername())
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('addNewTask() completed');
        },
      });
  }
}
