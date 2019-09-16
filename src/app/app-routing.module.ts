import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './services/auth.guard';
import { SecurePagesGuard } from './services/secure-pages.guard';
import { RetailersComponent } from './retailers/retailers.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: '', component: LandingPageComponent},
  {path: 'sign-in', component: SignInComponent, canActivate: [SecurePagesGuard]},
  {path: 'createAccount', component: SignUpComponent, canActivate: [SecurePagesGuard]},
  {path: 'verify', component: VerifyEmailComponent},
  {path: 'retailers', component: RetailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
