import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TaskService } from '../../shared/services/task.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  getTasksCompletedNum() {
    let num = 0;
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].isCompleted) {
        num++;
      }
    }
    return num;
  }
  tasks: Task[] = [];
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.readAll();
  }

  readAll() {
    this.taskService.getAllTasks(this.taskService.getUsername()).subscribe({
      next: (response) => {
        this.tasks = response;
        console.log(this.tasks);
        return this.tasks;
      },
      error: (err) => console.log(err),
      complete: () => console.log('getAllMembers() completed'),
    });
  }

  removeTask(id: string) {
    this.taskService
      .deleteTaskByID(this.taskService.getUsername(), id)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.readAll();
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('getTaskByID completed');
        },
      });
  }

  removeAllTask() {
    this.taskService.deleteAllTasks(this.taskService.getUsername()).subscribe({
      next: (response: any) => {
        alert('Delete all tasks successfully!');
        this.readAll();
      },
      error: (error: any) => {
        console.log(error);
        alert('Fail to delete all tasks');
      },
      complete: () => {
        console.log('Remove All Tasks is done.');
      },
    });
  }

  getTasksNum() {
    return this.tasks.length;
  }

  updateTask(task: Task) {
    this.taskService
      .updateTaskByID(task, this.taskService.getUsername(), task._id)
      .subscribe({
        next: (updatedTask) => {
          // Handle successful update
          console.log('update success', updatedTask);
        },
        error: (err) => {
          // Handle error
          console.error('error  updating task', err);
        },
      });
  }

  toggleTaskCompletion(task: Task) {
    console.log(task);
    this.updateTask(task);
    // Überprüfe, ob die Aufgabe bereits abgeschlossen ist
    if (task.isCompleted) {
      // Wenn die Aufgabe abgeschlossen ist, durchstreiche den Titel
      task.title = '<s>' + task.title + '</s>';
    } else {
      // Wenn die Aufgabe nicht abgeschlossen ist, entferne das Durchstreichen
      task.title = task.title.replace('<s>', '').replace('</s>', '');
    }
  }
}
