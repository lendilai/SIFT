import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RetailersComponent } from './retailers/retailers.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegistrationComponent,
    RetailersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'retailers', component: RetailersComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
