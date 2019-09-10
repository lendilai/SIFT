import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleSignIn() {
    return this.GeneralLogin(new auth.GoogleAuthProvider);
  }

  async SignIn(email, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.updateUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async SignUp(email, password, confirm) {
    if (password == confirm) {
      return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SendVerificationEmail();
          this.updateUserData(result.user);
        }).catch((error) => {
          window.alert(error.message);
        })
    } else {
      window.alert("Passwords don't match");
    }
  }

  async signOut() {
    await this.fireAuth.auth.signOut();
    return this.router.navigate(['/sign-in']);
  }

  SendVerificationEmail() {
    return this.fireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify']);
      })
  }

  ForgotPassword(emailToReset) {
    return this.fireAuth.auth.sendPasswordResetEmail(emailToReset)
      .then(() => {
        window.alert("An email has benn sent to your gmail account");
      }).catch((error) => {
        window.alert(error);
      })
  }

  FacebookSignIn() {
    return this.GeneralLogin(new auth.FacebookAuthProvider());
  }

  GeneralLogin(provider) {
    return this.fireAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        })
        this.updateUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      })
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc('users/${user.uid}');

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    console.log(data)
    return userRef.set(data, { merge: true });
  }
}
