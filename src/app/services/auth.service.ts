import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  public async login(email: string, password: string)
  {
    try 
    {
      return await this.auth.signInWithEmailAndPassword(email, password).catch(function(err){
        return err.code;
      });
    } 
    catch (error) {
      return null;
    }
  }

  public async register(email: string, password: string)
  {
    try 
    {
      return await this.auth.createUserWithEmailAndPassword(email, password).catch(function(err){
        return err.code;
      });
    } 
    catch (error) {
      return null;
    }
  }

  obtenerUser() {
    return this.auth.authState;
  }

  logOut() {
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }

}
