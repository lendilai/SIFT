import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
