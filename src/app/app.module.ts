import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AgmCoreModule } from '@agm/core'

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RetailersComponent } from './retailers/retailers.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { from } from 'rxjs';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const firebaseConfig = {
 apiKey: "AIzaSyAvYCgR9Kz3ACF91YfQL-vV-mN7JPYD2B4",
 authDomain: "testing-5c7bc.firebaseapp.com",
 databaseURL: "https://testing-5c7bc.firebaseio.com",
 projectId: "testing-5c7bc",
 storageBucket: "",
 messagingSenderId: "650436830549",
 appId: "1:650436830549:web:6ec5277687954807"
};


@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,
    LoginComponent,
    RegistrationComponent,
    RetailersComponent,

    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAJXMzzE17saSH55EZCT2m1YLsfaEWfNsY',
    //   libraries: ['places']
    // }),

    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      // {path:'createAccount', component:SignUpComponent},
      { path: 'retailers', component: RetailersComponent }
    ]),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
