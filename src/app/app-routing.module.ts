import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RetailersComponent } from './retailers/retailers.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegistrationComponent },
  { path:'retailers', component: RetailersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
