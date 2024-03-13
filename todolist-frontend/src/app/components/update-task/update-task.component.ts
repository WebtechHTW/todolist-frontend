import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task } from '../../shared/models/task';
import { TaskService } from '../../shared/services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent implements OnInit {
  id: string = '';
  task: Task = {
    _id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false,
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getTask(this.id);
  }

  getTask(id: string): void {
    this.taskService.getTaskByID(this.taskService.getUsername(), id).subscribe({
      next: (res) => {
        if (res.dueDate !== null) {
          const originalDate = new Date(res.dueDate);
          // Datum in das gewünschte Format konvertieren (yyyy-MM-dd)
          const formattedDate = originalDate.toISOString().split('T')[0];

          // Das formatierte Datum zurück in den Date-Typ konvertieren
          const dateParts = formattedDate.split('-');
          const convertedDate = new Date(
            Number(dateParts[0]),
            Number(dateParts[1]) - 1,
            Number(dateParts[2])
          );

          // Setze die erhaltene Aufgabe
          this.task = { ...res, dueDate: convertedDate };
        } else {
          this.task = res;
        }
        console.log(this.task);
      },
      error: (err) => {
        console.error('error by getTask:', err);
      },
    });
  }

  updateTask(task: Task) {
    // Validate the task object before sending for addition
    if (task.title.trim() !== '') {
      this.taskService
        .updateTaskByID(task, this.taskService.getUsername(), task._id)
        .subscribe({
          next: (updatedTask) => {
            this.router.navigate(['/tasks']);
            console.log('update success:', updatedTask);
          },
          error: (err) => {
            console.error('error  updating task: ', err);
          },
        });
    } else {
      alert("title can't not be blank!");
    }
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}
