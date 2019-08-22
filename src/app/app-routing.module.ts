import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path:'', redirectTo:'/sign-in', pathMatch:'full'},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:SignInComponent},
  {path:'createAccount', component:SignUpComponent},
  {path:'verify', component:VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
