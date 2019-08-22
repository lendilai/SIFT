import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"/sign-in", pathMatch:"full"},
  {path:"forgotPassword", component:"ForgotPasswordComponent"},
  {path:"home", component:"HomeComponent"},
  {path:"register", component:"SignUpComponent"},
  {path:"createAccount", component:"SignUpComponent"},
  {path:"verify", component:"VerifyEmailComponent"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
