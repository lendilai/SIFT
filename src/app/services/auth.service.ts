import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.firestore.doc<User>('users/${user.uid}').valueChanges();
        }else{
          return of(null);
        }
      })
    );
   }

   async googleSignIn(){
     const provider = new auth.GoogleAuthProvider();
     const credential = await this.fireAuth.auth.signInWithPopup(provider);
    //  console.log(this.updateUserData(credential.user));
     return this.updateUserData(credential.user);
   }

   async signOut(){
     await this.fireAuth.auth.signOut();
     return this.router.navigate(['/']);
   }

   private updateUserData(user){
      const userRef: AngularFirestoreDocument<User> = this.firestore.doc('users/${user.uid}');

      const data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };
      console.log(data)
      return userRef.set(data, {merge : true});
   }
}
