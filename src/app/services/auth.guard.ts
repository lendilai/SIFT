import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(private auth:AuthService, private router: Router){}

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    if(this.auth.loggedIn !== true){
      this.router.navigate(['/sign-in']);
    }
    return true;
  }
  // canActivate(next, state): Observable<boolean>{
  //     return this.auth.user$.pipe(
  //       take(1),
  //       map(user => !!user),
  //       tap(loggedIn => {
  //         if(!loggedIn){
  //           console.log("access denied");
  //           this.router.navigate(['/sign-in']);
  //         }
  //       })
  //     );
  // }
}
