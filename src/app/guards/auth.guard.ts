import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    } 

    this.router.navigate(['admin/login']);

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se usuário pode carregar o cod módulo');

      return this.verificarAcesso();
    }

}