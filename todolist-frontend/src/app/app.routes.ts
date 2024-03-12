import { Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './shared/guard/auth.guard';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'tasks', component: DashboardComponent, canActivate: [authGuard] },
  {
    path: 'tasks/add',
    component: AddTaskComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tasks/update/:id',
    component: UpdateTaskComponent,
    canActivate: [authGuard],
  },
  { path: '', component: HomepageComponent },
];
