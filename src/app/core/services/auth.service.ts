import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';

export interface Credentials  {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData!: firebase.User | null;

  constructor(
    private fireAuth: AngularFireAuth,
    ) {}

  readonly authState$ = this.fireAuth.authState;

  login(credentials: Credentials) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user)
  }

  register(credentials: Credentials) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
  }

  logout() {
    return this.fireAuth.signOut();
  }

  isLoggedIn() {
    return !!this.userData;
  }

  get user() {
    return this.userData;
  }
}
