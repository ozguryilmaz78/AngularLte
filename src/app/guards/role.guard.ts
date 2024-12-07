import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { HttpService } from '../services/management/http.service';
import { UserModel } from '../models/auth/user/user.model';
import { Observable } from 'rxjs';
import { SwalService } from '../services/management/swal.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user:UserModel= new UserModel();
  constructor(
    private authService: AuthService, 
    private router: Router,
  private swal:SwalService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var requiredRole = route.data['role'] as string;  
    if (this.authService.isAuthenticated() && (this.authService.user.userRole===requiredRole)) {
      return true;
    }
    this.swal.callToast('Yetkisiz İşlem','Menü için yetkiniz bulunmuyor.','error')
    return false;
  }




}
