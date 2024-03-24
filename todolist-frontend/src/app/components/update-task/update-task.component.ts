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
          // Ursprüngliches Datum abrufen
          const originalDate = new Date(res.dueDate);

          // Zeitzone des Servers berücksichtigen
          const serverOffset = originalDate.getTimezoneOffset() * 60000; // Offset in Millisekunden
          const convertedDate = new Date(originalDate.getTime() - serverOffset);

          // Setze die erhaltene Aufgabe
          this.task = { ...res, dueDate: convertedDate };
        } else {
          this.task = res;
        }
      },
      error: (err) => {
        console.error('Fehler bei getTask:', err);
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

  onChange($event: Event) {
    const newDate = ($event?.target as HTMLInputElement)?.value;
  if (newDate) {
    // Aktualisieren Sie das Datum im task-Objekt
    this.task.dueDate = new Date(newDate);
  }
  }
}
