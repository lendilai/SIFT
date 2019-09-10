import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RetailersComponent } from './retailers/retailers.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegistrationComponent },
  { path:'retailers', component: RetailersComponent },
=======
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './services/auth.guard';
import { RetailersComponent } from './retailers/retailers.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: '', component: LandingPageComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'createAccount', component: SignUpComponent},
  {path: 'verify', component: VerifyEmailComponent},
  {path: 'retailers', component: RetailersComponent, canActivate: [AuthGuard]}
>>>>>>> 9dff0002a04a00598a14fd09de57135eaab4d310
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
