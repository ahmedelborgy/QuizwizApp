import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'login', data: { title: 'login' } },
  { path: 'register', component: RegisterComponent, title: 'register', data: { title: 'register' } },
  { path: 'resetPassword', component: ResetPasswordComponent, title: 'resetPassword', data: { title: 'resetPassword' } },
  { path: 'forgotPassword', component: ForgotPasswordComponent, title: 'forgotPassword', data: { title: 'forgotPassword' } },
  { path: 'changePassword', component: ChangePasswordComponent, title: 'changePassword', data: { title: 'changePassword' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
