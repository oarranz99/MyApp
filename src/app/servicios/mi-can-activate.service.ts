import { Injectable } from '@angular/core';
import { AutenticationService } from './autentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MiCanActivateService {

  constructor(private autService : AutenticationService, private miroute: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (!this.autService.getEstaLogueado()) {
      this.miroute.navigate(['/']);
      //route.url['/'];
    }

  }
}
