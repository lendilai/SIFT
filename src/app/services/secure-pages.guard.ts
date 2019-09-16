import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecurePagesGuard implements  CanActivate{
  constructor(private auth:AuthService, private router:Router){}

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    if(this.auth.loggedIn){
      this.router.navigate[('')];
    }
    return true;
  }
}
