import { TokenStorageService } from './../token-storage-service/token-storage.service';
import { AuthService } from './../auth-service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService:AuthService,
              private tokenService: TokenStorageService,
              private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tokenService.getToken()) {
      return true;
    }
    this.router.navigate(['/login']);
  }
                
}
