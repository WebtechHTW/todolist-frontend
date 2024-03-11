import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'tasks', component: DashboardComponent },
  { path: 'tasks/:id', component: TaskComponent },
];
