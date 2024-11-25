import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth/auth.service';
import { inject } from '@angular/core';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserComponent } from './components/auth/user/user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [() => inject(AuthService).isAuthenticated()],
    children: [{ path: '', component: HomeComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'user', component: UserComponent },],
  },
];
